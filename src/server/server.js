/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
import express from 'express';
import helmet from 'helmet';
import webpack from 'webpack';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import cookieParser from 'cookie-parser';
import boom from '@hapi/boom';
import passport from 'passport';
import axios from 'axios';
import reducer from '../frontend/react/reducers';
import Layout from '../frontend/react/containers/Layout';
import serverRoutes from '../frontend/routes/serverRoutes';
import getManifest from './getManifest';
import { ENV, PORT, API_URL, ADMIN_API_KEYS_TOKEN } from './config/config';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

require('./utils/auth/strategies/basic');

if (ENV === 'development') {
  const webPackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webPackConfig);
  const serverConfig = { port: PORT, hot: true };
  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
} else {
  app.use((req, res, next) => {
    req.hashManifest = getManifest();
    next();
  });
  app.use(helmet());
  app.use(helmet.permittedCrossDomainPolicies());
  app.disable('x-powered-by');
}

const setResponse = (html, preloadedState, manifest) => {
  const mainStyles = manifest ? manifest['main.css'] : '/assets/app.css';
  const mainBuild = manifest ? manifest['main.js'] : '/assets/app.js';
  const vendorBuild = manifest ? manifest['vendors.js'] : 'assets/vendor.js';
  return (
    `<!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta charset="utf-8" />
        <link rel="stylesheet" type="text/css" href="${mainStyles}" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css"/>
        <title>Eduli</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <div id="modal"></div>
        <script type="text/javascript" id="preloadedState">
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script type="text/javascript" src="${mainBuild}"></script>
        <script type="text/javascript" src="${vendorBuild}"></script>
      </body>
    </html>`
  );
};

const getData = async (id, route, token) => {
  const url = id ? `${API_URL}/api/${route}/${id}` : `${API_URL}/api/${route}`;
  const data = await axios({
    url,
    headers: { Authorization: `Bearer ${token}` },
    method: 'get',
  }).then(({ data }) => {
    return data.data;
  });
  return data;
};

const renderApp = async (req, res) => {
  let initialState;
  const { id, token, type } = req.cookies;

  if (!token) {
    try {
      let publicToken = await axios({
        url: `${API_URL}/api/auth/sign-in`,
        method: 'post',
        auth: { username: 'public@eduli.com', password: 'public-eduli' },
        data: { apiKeyToken: ADMIN_API_KEYS_TOKEN },
      });
      publicToken = publicToken.data.token;

      const institute = await getData('5efe3e629ded7ce2480be025', 'institute', publicToken);
      institute.levels = await getData(null, 'level', publicToken);
      institute.courses = await getData(null, 'course', publicToken);
      institute.topics = await getData(null, 'topic', publicToken);

      initialState = {
        user: {},
        institute,
      };
    } catch (error) {
      // console.log(error.message);
      initialState = {
        user: {},
        institute: {},
      };
    }
  } else {
    try {
      const userData = await getData(id, 'user', token);
      if (type === 'student') {
        userData.level = userData.level ? await getData(userData.level, 'level', token) : {};
      }
      const institute = await getData(userData.institute, 'institute', token);
      institute.levels = await getData(null, 'level', token);
      institute.courses = await getData(null, 'course', token);
      institute.topics = await getData(null, 'topic', token);
      institute.videos = await getData(null, 'video', token);
      institute.files = await getData(null, 'file', token);
      initialState = {
        user: {
          ...userData, token,
        },
        institute,
      };
    } catch (err) {
      // console.log(err.message);
      initialState = {
        user: {},
        institute: {},
      };
    }
  }

  const store = createStore(reducer, initialState);
  const preloadedState = store.getState();
  const isLogged = (initialState.user ? initialState.user.id : false);
  const bloke = (initialState.user ? initialState.user.type : false);
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        <Layout>
          {renderRoutes(serverRoutes(isLogged, bloke))}
        </Layout>
      </StaticRouter>
    </Provider>,
  );
  res.send(setResponse(html, preloadedState, req.hashManifest));
};

app.post('/auth/sign-in', async (req, res, next) => {
  passport.authenticate('basic', (error, data) => {
    try {
      if (error || !data) {
        next(boom.unauthorized());
      }
      req.login(data, { session: false }, async (err) => {
        if (err) {
          next(err);
        }
        const { token, ...user } = data;
        res.cookie('token', token, {
          httpOnly: !(ENV === 'development'),
          secure: !(ENV === 'development'),
        });
        res.status(200).json(user);
      });
    } catch (err) {
      next(err);
    }
  })(req, res, next);
});

app.post('/auth/sign-up', async (req, res, next) => {
  const { body: user } = req;

  try {
    const userData = await axios({
      url: `${API_URL}/api/auth/${user.type}/sign-up`,
      method: 'post',
      data: {
        'name': user.name,
        'lastname': user.lastname,
        'nickname': user.nickname,
        'email': user.email,
        'password': user.password,
        'institute': user.institute,
      },
    });
    res.status(201).json({
      id: userData.data.id,
      name: req.body.name,
      lastname: req.body.lastname,
      nickname: req.body.nickname,
      email: req.body.email,
    });
  } catch (error) {
    next(error);
  }
});

app.use(express.static(`${__dirname}/public`));
app.get('*', renderApp);

app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log(`${ENV} server running on Port ${PORT}`);
});

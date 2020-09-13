/* eslint-disable global-require */
import express from 'express';
import helmet from 'helmet';
import webpack from 'webpack';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import cookieParser from 'cookie-parser';
import boom from '@hapi/boom';
import passport from 'passport';
import axios from 'axios';
import Layout from '../frontend/components/Layout/Layout';
import serverRoutes from '../frontend/routes/serverRoutes';
import getManifest from './getManifest';
import { Provider } from '../frontend/Context';
import { ENV, PORT, API_URL } from './config/config';

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
  app.use(webpackHotMiddleware(compiler, {
    log: false,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000,
  }));
} else {
  app.use((req, res, next) => {
    req.body = {
      manifest: getManifest(),
    };
    next();
  });
  app.use(helmet());
  app.use(helmet.permittedCrossDomainPolicies());
  app.disable('x-powered-by');
}

type preloadState = {
  theme: string
}

const setResponse = (html: string, preloadedState: preloadState, manifest: any) => {
  const mainStyles = manifest ? manifest['main.css'] : '/assets/app.css';
  const mainBuild = manifest ? manifest['main.js'] : '/assets/app.js';
  const vendorBuild = manifest ? manifest['vendors.js'] : 'assets/vendor.js';
  return (
    `<!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Mulish:wght@500&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css"/>
        <link rel="stylesheet" type="text/css" href="${mainStyles}" />
        <title>Eduli</title>
      </head>
      <body class=${JSON.stringify(preloadedState.theme).replace(/</g, '\\u003c')}>
        <div id="app">${html}</div>
        <div id="modal"></div>
        <script type="text/javascript" id="preloadedState">
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')};
        </script>
        <script type="text/javascript" src="${mainBuild}"></script>
        <script type="text/javascript" src="/${vendorBuild}"></script>
      </body>
    </html>`
  );
};

const renderApp = (req: express.Request, res: express.Response) => {
  const { theme } = req.cookies;
  const { manifest } = req.body;
  const initialState = {
    theme: theme || 'light',
    user: {},
    institute: {},
  };
  const html = renderToString(
    <Provider initialState={initialState}>
      <StaticRouter location={req.url} context={{}}>
        <Layout>
          {renderRoutes(serverRoutes())}
        </Layout>
      </StaticRouter>
    </Provider>,
  );
  res.send(setResponse(html, initialState, manifest));
};

app.post('/theme', async (req, res, next) => {
  // const { body: theme, body: user } = req;
  const { theme } = req.body;

  try {
    // const setTheme = await axios({
    //   url: `${API_URL}/${user.id}/theme`,
    //   method: 'post',
    //   data: {
    //     'theme': theme,
    //   },
    // });
    res.status(200).json({
      theme,
    });
  } catch (error) {
    next(error);
  }
});

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

app.listen(PORT, () => {
  console.log(`${ENV} server running on Port ${PORT}`);
});

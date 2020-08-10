import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import { Provider } from './Context';
import App from './routes/App.tsx';
import './static/scss/index.scss';

const preloadedState = window.__PRELOADED_STATE__;
const history = createBrowserHistory();

delete window.__PRELOADED_STATE__;

const app = document.getElementById('app');

ReactDOM.hydrate(
  <Provider initialState={preloadedState}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  app,
);

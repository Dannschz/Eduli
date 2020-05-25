import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import App from './routes/App';
import './assets/sass/style.scss';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const preloadedState = window.__PRELOADED_STATE__;
const store = createStore(reducer, preloadedState, composeEnhancers(applyMiddleware(thunk)));
const history = createBrowserHistory();

delete window.__PRELOADED_STATE__;

const app = document.getElementById('app');

ReactDOM.hydrate(
  <Provider store={store}>
    <Router history={history}>
      <App isLogged={(preloadedState.user.id)} />
    </Router>
  </Provider>,
  app,
);

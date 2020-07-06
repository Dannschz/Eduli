import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './react/reducers';
import App from './routes/App';
import './scss/index.scss';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const preloadedState = window.__PRELOADED_STATE__;
const store = createStore(reducer, preloadedState, composeEnhancers(applyMiddleware(thunk)));
const history = createBrowserHistory();

delete window.__PRELOADED_STATE__;

const app = document.getElementById('app');

// const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;

// renderMethod(
//   <Provider store={store}>
//     <Router history={history}>
//       <App
//         isLogged={(preloadedState ? preloadedState.user.id : false)}
//         bloke={(preloadedState ? preloadedState.user.type : false)}
//       />
//     </Router>
//   </Provider>,
//   app,
// );

ReactDOM.hydrate(
  <Provider store={store}>
    <Router history={history}>
      <App
        isLogged={(preloadedState ? preloadedState.user._id : false)}
        bloke={(preloadedState ? preloadedState.user.type : false)}
      />
    </Router>
  </Provider>,
  app,
);

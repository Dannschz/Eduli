import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Layout from '../containers/Layout';
import NotFound from '../pages/NotFound/NotFound';
import HomePage from '../pages/HomePage/HomePage';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;

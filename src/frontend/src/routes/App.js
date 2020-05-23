import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import HomePage from '../containers/HomePage';
import NotFound from '../containers/NotFound';

const App = ({ isLogged }) => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={HomePage} />
        {/* <Route exact path='/player/:id' component={isLogged ? Player : Login} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} /> */}
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;

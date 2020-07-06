import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Layout from '../react/containers/Layout';
// import HomePage from '../react/pages/HomePage';
import NotFound from '../react/pages/NotFound';
import School from '../react/pages/School';
import HomeStudent from '../react/pages/HomeStudent';
import HomeTeacher from '../react/pages/HomeTeacher';
import Level from '../react/pages/Level';
import Course from '../react/pages/Course';
import VideoPlayer from '../react/pages/VideoPlayer';

const App = ({ isLogged, bloke }) => (
  <BrowserRouter>
    <Layout isLogged={isLogged} bloke={bloke}>
      <Switch>
        <Route exact path='/' component={!isLogged ? School : bloke === 'student' ? HomeStudent : bloke === 'teacher' ? HomeTeacher : School} />
        <Route exact path='/home' component={!isLogged ? School : bloke === 'student' ? HomeStudent : bloke === 'teacher' ? HomeTeacher : School} />
        <Route exact path='/student' component={isLogged ? bloke === 'student' ? HomeStudent : NotFound : NotFound} />
        <Route exact path='/teacher' component={!isLogged ? NotFound : bloke === 'teacher' ? HomeStudent : NotFound} />
        <Route exact path='/level/:id' component={Level} />
        <Route exact path='/course/:id' component={Course} />
        <Route exact path='/player/:id' component={!isLogged ? NotFound : VideoPlayer} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;

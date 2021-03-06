import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { useStateValue } from '../Context';
import Layout from '../components/Layout/Layout';
import NotFound from '../pages/NotFound/NotFound';
import HomePage from '../pages/HomePage/HomePage';
import Dashboard from '../pages/Manager/Dashboard';
import Settings from '../pages/Manager/Settings';
import Institute from '../pages/Institute/Institute';
import Areas from '../pages/Institute/Areas';
import Teacher from '../pages/Teacher/Teacher';
import NewTeacher from '../pages/Teacher/NewTeacher';
import Students from '../pages/Students/Students';
import NewStudent from '../pages/Students/NewStudent';

const App = () => {
  const { theme } = useStateValue();
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    const body = document.body.classList;
    theme === 'light' ? body.remove('dark') : body.add(theme);
    theme === 'dark' ? body.remove('light') : body.add(theme);
  }
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/institute' component={Institute} />
          <Route exact path='/institute/areas' component={Areas} />
          <Route exact path='/manager' component={Dashboard} />
          <Route exact path='/manager/settings' component={Settings} />
          <Route exact path='/manager/teachers' component={Teacher} />
          <Route exact path='/manager/teachers/new' component={NewTeacher} />
          <Route exact path='/institute/students' component={Students} />
          <Route exact path='/institute/students/new' component={NewStudent} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;

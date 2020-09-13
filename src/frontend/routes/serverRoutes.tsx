import NotFound from '../pages/NotFound/NotFound';
import HomePage from '../pages/HomePage/HomePage';
import Dashboard from '../pages/Manager/Dashboard';
import Settings from '../pages/Manager/Settings';

const serverRoutes = () => {
  return [
    {
      path: '/',
      exact: true,
      component: HomePage,
    },
    {
      path: '/manager',
      exact: true,
      component: Dashboard,
    },
    {
      path: '/manager/settings',
      exact: true,
      component: Settings,
    },
    {
      name: 'NotFound',
      component: NotFound,
    },
  ];
};

export default serverRoutes;

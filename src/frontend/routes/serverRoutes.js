import HomePage from '../containers/HomePage';
import NotFound from '../containers/NotFound';

const serverRoutes = (isLogged) => {
  return [
    {
      path: '/',
      exact: true,
      component: HomePage,
    },
    {
      name: 'NotFound',
      component: NotFound,
    },
  ];
};

export default serverRoutes;

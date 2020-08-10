import NotFound from '../pages/NotFound/NotFound';
import HomePage from '../pages/HomePage/HomePage';

const serverRoutes = () => {
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

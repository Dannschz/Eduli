// import HomePage from '../react/pages/HomePage';
import NotFound from '../react/pages/NotFound';
import School from '../react/pages/School';
import HomeStudent from '../react/pages/HomeStudent';
import HomeTeacher from '../react/pages/HomeTeacher';
import Level from '../react/pages/Level';
import Course from '../react/pages/Course';
import VideoPlayer from '../react/pages/VideoPlayer';

const serverRoutes = (isLogged, bloke) => {
  return [
    {
      path: '/',
      exact: true,
      component: !isLogged ? School : bloke === 'student' ? HomeStudent : bloke === 'teacher' ? HomeTeacher : School,
    },
    {
      path: '/home',
      exact: true,
      component: !isLogged ? School : bloke === 'student' ? HomeStudent : bloke === 'teacher' ? HomeTeacher : School,
    },
    {
      path: '/student',
      exact: true,
      component: isLogged ? bloke === 'student' ? HomeStudent : NotFound : NotFound,
    },
    {
      path: '/teacher',
      exact: true,
      component: !isLogged ? NotFound : bloke === 'teacher' ? HomeStudent : NotFound,
    },
    {
      path: '/level/:id',
      exact: true,
      component: Level,
    },
    {
      path: '/course/:id',
      exact: true,
      component: Course,
    },
    {
      path: '/player/:id',
      exact: true,
      component: !isLogged ? NotFound : VideoPlayer,
    },
    {
      name: 'NotFound',
      component: NotFound,
    },
  ];
};

export default serverRoutes;

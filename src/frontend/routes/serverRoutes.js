// import HomePage from '../react/pages/HomePage';
import NotFound from '../react/pages/NotFound';
import School from '../react/pages/School';
import HomeStudent from '../react/pages/HomeStudent';
import HomeTeacher from '../react/pages/HomeTeacher';
import Level from '../react/pages/Level';
import Course from '../react/pages/Course';
import VideoPlayer from '../react/pages/VideoPlayer';
import HomeManager from '../react/pages/HomeManager';
import CreateTeacher from '../react/pages/CreateTeacher';
import LoginManger from '../react/pages/LoginManager';

const serverRoutes = (isLogged, bloke) => {
  return [
    {
      path: '/',
      exact: true,
      component: !isLogged ? School : bloke === 'student' ? HomeStudent : bloke === 'teacher' ? HomeTeacher : bloke === 'manager' ? HomeManager : School,
    },
    {
      path: '/home',
      exact: true,
      component: !isLogged ? School : bloke === 'student' ? HomeStudent : bloke === 'teacher' ? HomeTeacher : bloke === 'manager' ? HomeManager : School,
    },
    {
      path: '/student',
      exact: true,
      component: isLogged && bloke === 'student' ? HomeStudent : NotFound,
    },
    {
      path: '/teacher',
      exact: true,
      component: isLogged && bloke === 'teacher' ? HomeTeacher : NotFound,
    },
    {
      path: '/manager',
      exact: true,
      component: isLogged && bloke === 'manager' ? HomeManager : isLogged && bloke !== 'manager' ? NotFound : !isLogged ? LoginManger : NotFound,
    },
    {
      path: '/login/manager',
      exact: true,
      component: !isLogged ? LoginManger : bloke === 'manager' ? HomeManager : NotFound,
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
      path: '/create/teacher',
      exact: true,
      component: !isLogged && bloke === 'teacher' ? CreateTeacher : NotFound,
    },
    {
      name: 'NotFound',
      component: NotFound,
    },
  ];
};

export default serverRoutes;

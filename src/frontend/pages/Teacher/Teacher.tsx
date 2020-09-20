import React from 'react';
import { Link } from 'react-router-dom';
import Sidenav from '../../components/Manager/Sidenav/Sidenav';
import Toolbar from '../../components/Manager/Toolbar/Toolbar';
import TeacherList from '../../components/Teacher/TeacherList';
import './teacher.scss';

const PlusIcon = require('../../static/assets/images/mas.svg');

const teachers = [
  {
    id: '1',
    name: 'Jin Gómez',
    email: 'jin@uam.com',
    nivel: 'Superior',
    avatar: 'https://randomuser.me/api/portraits/men/26.jpg',
  },
  {
    id: '2',
    name: 'Albert Almaraz',
    email: 'albert@uam.com',
    nivel: 'Secundaria',
    avatar: 'https://randomuser.me/api/portraits/men/78.jpg',
  },
  {
    id: '3',
    name: 'Gabriela Sainz',
    email: 'gaby@uam.com',
    nivel: 'Primaria',
    avatar: 'https://randomuser.me/api/portraits/women/18.jpg',
  },
];

export default function Teacher() {
  return (
    <>
      <Toolbar />
      <Sidenav />
      <div className='teacherPage'>
        <div className='title'>
          <h1 className='teachTitle'>Profesores Registrados</h1>
          <Link to='/manager/teachers/new' className='addTeacherBtn'>
            <img src={PlusIcon} alt='Add Teacher' />
            <p>New Teacher</p>
          </Link>
        </div>
        <TeacherList teachers={teachers} />
      </div>
    </>
  );
}

import React from 'react';
import Sidenav from '../../components/Manager/Sidenav/Sidenav';
import Toolbar from '../../components/Manager/Toolbar/Toolbar';
import './students.scss';

export default function Students() {
  return (
    <>
      <Toolbar />
      <Sidenav />
      <div className='studentsContainer'>
        <h1>Aquí van los estudiates</h1>
      </div>
    </>
  );
}

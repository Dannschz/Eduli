import React from 'react';
import Sidenav from '../../components/Manager/Sidenav/Sidenav';
import Toolbar from '../../components/Manager/Toolbar/Toolbar';
import StudentForm from '../../components/Students/StudentForm';

export default function NewStudent() {
  return (
    <>
      <Toolbar />
      <Sidenav />
      <StudentForm />
    </>
  );
}

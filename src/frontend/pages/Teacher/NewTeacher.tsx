import React from 'react';
import TeacherForm from '../../components/Teacher/TeacherForm';
import Sidenav from '../../components/Manager/Sidenav/Sidenav';
import Toolbar from '../../components/Manager/Toolbar/Toolbar';

export default function NewTeacher() {
  return (
    <>
      <Toolbar />
      <Sidenav />
      <TeacherForm />
    </>
  );
}

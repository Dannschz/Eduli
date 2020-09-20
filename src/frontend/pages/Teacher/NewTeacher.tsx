import React from 'react';
import TeacherForm from '../../components/Teacher/TeacherForm';
import { useStateValue } from '../../Context';
import Sidenav from '../../components/Manager/Sidenav/Sidenav';
import Toolbar from '../../components/Manager/Toolbar/Toolbar';

export default function NewTeacher() {
  const { theme } = useStateValue();

  return (
    <>
      <Toolbar />
      <Sidenav />
      <TeacherForm />
    </>
  );
}

import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import LoginForm from '../components/forms/LoginForm';
// eslint-disable-next-line import/no-cycle
import Signin from './Signin';

export default function Login(props) {

  const { setForm } = props;
  const [student, setStudent] = useState(false);
  const [teacher, setTeacher] = useState(false);

  return (
    <section className='LoginCard center v-center background-white'>
      <div className='LoginCard__header'>
        <h1>Bienvenido a EduLi</h1>
        <h4>Selecciona tu tipo de usuario</h4>
        <div className='column-2'>
          <button type='button' className={`${student ? 'btn-tertiary' : 'btn-outline-tertiary'}`} onClick={() => { setStudent(!student); setTeacher(false); }}>Alumno</button>
          <button type='button' className={`${teacher ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => { setTeacher(!teacher); setStudent(false); }}>Profesor</button>
        </div>
      </div>
      <div className='LoginCard__body'>
        { student && <LoginForm user='student' /> }
        { teacher && <LoginForm user='teacher' /> }
      </div>
      <div className='LoginCard__footer'>
        <span className='login-footer center'>
          No estas registrado?
          <button type='button' className='btn-link-danger' onClick={() => setForm(<Signin setForm={setForm} />)}>
            Create account
          </button>
        </span>
      </div>
    </section>
  );
}

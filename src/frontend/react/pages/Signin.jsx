import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import SignupForm from '../components/forms/SinginForm';
// eslint-disable-next-line import/no-cycle
import Login from './Login';

export default function Signin(props) {

  const { setForm } = props;
  const [student, setStudent] = useState(false);
  const [teacher, setTeacher] = useState(false);

  return (
    <section className='LoginCard center v-center background-white'>
      <div className='LoginCard__header'>
        <h1>Crear cuenta en EduLi</h1>
        <h4>Selecciona tu tipo de usuario</h4>
        <div className='column-2'>
          <button type='button' className={`${student ? 'btn-tertiary' : 'btn-outline-tertiary'}`} onClick={() => { setStudent(!student); setTeacher(false); }}>Alumno</button>
          <button type='button' className={`${teacher ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => { setTeacher(!teacher); setStudent(false); }}>Profesor</button>
        </div>
      </div>
      <div className='LoginCard__body'>
        { student && <SignupForm user='student' /> }
        { teacher && <SignupForm user='teacher' /> }
      </div>
      <div className='LoginCard__footer'>
        <span className='login-footer center'>
          Ya tienes cuenta?
          <button type='button' className='btn-link-danger' onClick={() => setForm(<Login setForm={setForm} />)}>
            Inicia Sesión
          </button>
        </span>
      </div>
    </section>
  );
}

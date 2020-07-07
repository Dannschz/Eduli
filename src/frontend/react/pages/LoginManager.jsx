import React from 'react';
import LoginForm from '../components/forms/LoginForm';

export default function LoginManager(props) {

  return (
    <section className='LoginCard center v-center background-white'>
      <div className='LoginCard__header'>
        <h1>Bienvenido a EduLi</h1>
      </div>
      <div className='LoginCard__body'>
        <LoginForm user='manager' />
      </div>
    </section>
  );
}

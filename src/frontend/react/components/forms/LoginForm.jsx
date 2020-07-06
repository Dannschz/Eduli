import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { loginUser } from '../../actions';

const SigninForm = (props) => {
  const { user } = props;
  const { register, errors, handleSubmit, watch } = useForm();
  const password = useRef({});
  password.current = watch('password', '');

  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState(false);

  // 'use strict';
  const onSubmit = (data) => {
    props.loginUser(data, `/${user}`, setError);
  };

  return (
    <form className='form-group' onSubmit={handleSubmit(onSubmit)}>
      {error && <h6 className='text-danger'>Correo o contraseña incorrectos</h6>}
      <div className='icon-input'>
        <label htmlFor='StudentUserName'>Correo</label>
        <span
          className={
            `${emailFocus ?
              `background-${user === 'teacher' ?
                'secondary' :
                'tertiary'}
                text-white` :
              ''
            }
            ${errors?.email ? 'error' : ''}
            border-thin`
          }
        >
          <i className='far fa-user' />
        </span>
        <input
          // id='StudentUserName'
          // className={`form-control ${errors?.email ? 'error' : ''}`}
          // placeholder='Nombre de usuario'
          // type='text'
          // value={emailValue}
          // onChange={(event) => setEmailValue(event.target.value)}
          onFocus={() => setEmailFocus(true)}
          onBlur={() => setEmailFocus(false)}
          placeholder='Digite correo electronico'
          name='email'
          className='form-control'
          ref={register({
            required: {
              value: true,
              message: 'Correo requerdio',
              pattern: /[A-Za-z]{3}/,
            },
          })}
        />
        <small className={`text-danger ${errors?.email ? 'visible' : 'unseen'}`}>
          {errors?.email?.message}
        </small>
      </div>

      <div className='form-password'>
        <label htmlFor='StudentPassword'>Contraseña</label>
        <span
          className={
            `${passwordFocus ?
              `background-${user === 'teacher' ?
                'secondary' :
                'tertiary'}
              text-white` : ''
            }
            ${errors?.password ? 'error' : ''}
            border-thin`
          }
        >
          <i className='fas fa-unlock-alt' />
        </span>
        <input
          // id='StudentPassword'
          // className={`form-control ${errors?.password ? 'error' : ''}`}
          // placeholder='Nombre de usuario'
          // type='password'
          // value={passwordValue}
          // onChange={(event) => setPasswordValue(event.target.value)}
          onFocus={() => setPasswordFocus(true)}
          onBlur={() => setPasswordFocus(false)}
          name='password'
          className='form-control'
          placeholder='Ingresa tu contraseña'
          type={visible ? 'text' : 'password'}
          // pattern='(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ].*'
          ref={register({
            required: 'Contraseña requerida',
          })}
        />
        <small className={`text-danger ${errors?.password ? 'visible' : 'unseen'}`}>
          {errors?.password?.message}
        </small>
        <span role='presentation' className='right v-end' onClick={() => setVisible(!visible)}>
          <i className={`far fa-eye${visible ? '' : '-slash'}`} />
        </span>
      </div>

      <div className='form-help column--2'>
        <div className='form-group form-check left v-start'>
          <label className='form-check-label text-darken'>
            <input className='form-check-input' type='checkbox' />
            <span className='form-check-sign' />
            Remember me
          </label>
        </div>
        <div className='text-forgot right'>
          <Link to='/' className='text-danger'>
            Forgot password?
          </Link>
        </div>
      </div>

      <button type='submit' className={`btn btn-${user === 'teacher' ? 'secondary' : 'tertiary'} btn-100`}>
        Entrar
      </button>
    </form>
  );
};

const mapDispatchToProps = {
  loginUser,
};

SigninForm.propTypes = {
  loginUser: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(SigninForm);

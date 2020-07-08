import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { registerUser } from '../../actions';

const SignupForm = (props) => {

  const { user } = props;
  const { register, errors, handleSubmit, watch } = useForm();
  const password = useRef({});
  password.current = watch('password', '');

  const [nameFocus, setNameFocus] = useState(false);
  const [lastNameFocus, setLastNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [userNameFocus, setUserNameFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [password2Focus, setPassword2Focus] = useState(false);
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = (data) => {
    props.registerUser({ ...data, type: user, institute: '5efe3e629ded7ce2480be025' }, '/', setError);
  };

  return (
    <form className='form-group column-2 column-gap-sm' onSubmit={handleSubmit(onSubmit)}>
      {error && <h6 className='text-danger'>Error intentelo de nuevo</h6>}
      <div className='icon-input'>
        <label htmlFor='RegisterName'>Nombre</label>
        <span
          className={
            `${nameFocus ?
              `background-${user === 'teacher' ?
                'secondary' :
                'tertiary'
              } text-white` : ''
            }
            ${errors?.name ? 'error' : ''}
            border-thin`
          }
        >
          <i className='far fa-user' />
        </span>
        <input
          className='form-control'
          type='text'
          onFocus={() => setNameFocus(true)}
          onBlur={() => setNameFocus(false)}
          placeholder='Digite su nombre '
          name='name'
          ref={register({
            required: {
              value: true,
              message: 'Nombre requerdio',
              pattern: /[A-Za-z]{2}/,
            },
          })}
        />
        <small className={`text-danger ${errors?.name ? 'visible' : 'unseen'}`}>
          {errors?.name?.message}
        </small>
      </div>

      <div className='icon-input'>
        <label htmlFor='RegisterUserLastname'>Apellidos</label>
        <span
          className={
            `${lastNameFocus ?
              `background-${user === 'teacher' ?
                'secondary' :
                'tertiary'
              } text-white` : ''
            }
            ${errors?.lastname ? 'error' : ''}
            border-thin`
          }
        >
          <i className='far fa-user' />
        </span>
        <input
          type='text'
          onFocus={() => setLastNameFocus(true)}
          onBlur={() => setLastNameFocus(false)}
          placeholder='Digite sus apellidos'
          name='lastname'
          className='form-control'
          ref={register({
            required: {
              value: true,
              message: 'Apellidos requerdio',
              pattern: /[A-Za-z]{2}/,
            },
          })}
        />
        <small className={`text-danger ${errors?.lastname ? 'visible' : 'unseen'}`}>
          {errors?.lastname?.message}
        </small>
      </div>

      <div className='icon-input'>
        <label htmlFor='RegisterUserEmail'>Correo electronico</label>
        <span
          className={
            `${emailFocus ?
              `background-${user === 'teacher' ?
                'secondary' :
                'tertiary'
              } text-white` : ''
            }
            ${errors?.email ? 'error' : ''}
            border-thin`
          }
        >
          <i className='far fa-envelope' />
        </span>
        <input
          type='email'
          onFocus={() => setEmailFocus(true)}
          onBlur={() => setEmailFocus(false)}
          placeholder='Digite su correo electronico '
          name='email'
          className='form-control'
          pattern='^[^@]+@[^@]+\.[a-zA-Z]{2,}$'
          ref={register({
            required: {
              value: true,
              message: 'Correo requerdio',
            },
          })}
        />
        <small className={`text-danger ${errors?.email ? 'visible' : 'unseen'}`}>
          {errors?.email?.message}
        </small>
      </div>

      <div className='icon-input'>
        <label htmlFor='RegisterUserName'>Nombre de usuario</label>
        <span
          className={
            `${userNameFocus ?
              `background-${user === 'teacher' ?
                'secondary' :
                'tertiary'
              } text-white` : ''
            }
            ${errors?.nickname ? 'error' : ''}
            border-thin`
          }
        >
          <i className='far fa-user' />
        </span>
        <input
          placeholder='Digite un nombre de usuario'
          type='text'
          onFocus={() => setUserNameFocus(true)}
          onBlur={() => setUserNameFocus(false)}
          name='nickname'
          className='form-control'
          ref={register({
            required: {
              value: true,
              message: 'Nombre se usuario requerdio',
              pattern: /[A-Za-z]{2}/,
            },
          })}
        />
        <small className={`text-danger ${errors?.nickname ? 'visible' : 'unseen'}`}>
          {errors?.nickname?.message}
        </small>
      </div>

      <div className='form-password'>
        <label htmlFor='RegisterPassword'>Contraseña (Minimo 8 caracteres)</label>
        <span
          className={
            `${passwordFocus ?
              `background-${user === 'teacher' ?
                'secondary' :
                'tertiary'
              } text-white` : ''
            }
            ${errors?.password ? 'error' : ''}
            border-thin`
          }
        >
          <i className='fas fa-unlock-alt' />
        </span>
        <input
          onFocus={() => setPasswordFocus(true)}
          onBlur={() => setPasswordFocus(false)}
          name='password'
          className='form-control'
          placeholder='Ingresa una contraseña'
          type={visible ? 'text' : 'password'}
          ref={register({
            required: 'Contraseña requerida',
            minLength: {
              value: 8,
              message: 'La contraseña debe tener un minimo de 8 caracteres',
            },
          })}
        />
        <small className={`text-danger ${errors?.password ? 'visible' : 'unseen'}`}>
          {errors?.password?.message}
        </small>
        <span role='presentation' className='right v-end' onClick={() => setVisible(!visible)}>
          <i className={`far fa-eye${visible ? '' : '-slash'}`} />
        </span>
      </div>

      <div className='form-password'>
        <label htmlFor='RegisterValidatePassword'>Validar contraseña</label>
        <span
          className={
            `${password2Focus ?
              `background-${user === 'teacher' ?
                'secondary' :
                'tertiary'
              } text-white` : ''
            }
            ${errors?.passwordRepeat ? 'error' : ''}
            border-thin`
          }
        >
          <i className='fas fa-unlock-alt' />
        </span>
        <input
          placeholder='Validar contraseña'
          onFocus={() => setPassword2Focus(true)}
          onBlur={() => setPassword2Focus(false)}
          name='passwordRepeat'
          className='form-control'
          type='password'
          ref={register({
            validate: (value) => value === password.current || 'The passwords do not match',
          })}
        />
        <small className={`text-danger ${errors?.passwordRepeat ? 'visible' : 'unseen'}`}>
          {errors?.passwordRepeat?.message}
        </small>
      </div>

      <button type='submit' className={`btn-${user === 'teacher' ? 'secondary' : 'tertiary'} btn-100 column-end-2`}>
        Registrate
      </button>
    </form>
  );
};

const mapDispatchToProps = {
  registerUser,
};

SignupForm.propTypes = {
  registerUser: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(SignupForm);

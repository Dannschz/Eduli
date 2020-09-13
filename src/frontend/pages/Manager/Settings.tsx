import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useStateValue } from '../../Context';
import Sidenav from '../../components/Manager/Sidenav/Sidenav';
import Toolbar from '../../components/Manager/Toolbar/Toolbar';

const Settings = () => {
  const { theme } = useStateValue();
  const [page, setPage] = useState(1);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <>
      <Toolbar />
      <Sidenav />
      <section className='Settings'>
        <div className='Settings__header'>
          <button
            type='button'
            className={page === 1 ? 'btn' : `btn-outline ${theme}`}
            onClick={() => setPage(1)}
          >
            Institucion
          </button>
          <button
            type='button'
            className={page === 2 ? 'btn' : `btn-outline ${theme}`}
            onClick={() => setPage(2)}
          >
            Manager
          </button>
        </div>
        <div className='Settings__body'>
          {/* <h1>{page === 1 ? 'Institucion' : 'Manager'}</h1> */}
          {page === 1 && (
            <form className='form-control' onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor='InstituteName'>
                <small className='form-description'>Name</small>
                <input
                  type='text'
                  id='InstituteName'
                  name='instituteName'
                  className='form-input'
                  placeholder='Digite el nombre'
                  ref={register({
                    required: true,
                    min: 1,
                    maxLength: 80,
                  })}
                />
                <span className={`form-message text-${errors?.instituteName ? 'danger' : 'gray-400'}`}>
                  {errors?.instituteName && 'Name requerido'}
                </span>
              </label>

              {/**   **/}
              <label htmlFor='InstituteAddress'>
                <small className='form-description'>Address</small>
                <input
                  type='text'
                  id='InstituteAddress'
                  name='instituteAddress'
                  className='form-input'
                  placeholder='Digite la dirección'
                  ref={register({
                    required: true,
                    min: 1,
                    maxLength: 80,
                  })}
                />
                <span className={`form-message text-${errors?.instituteAddress ? 'danger' : 'gray-400'}`}>
                  {errors?.instituteAddress && 'Direccion requerida'}
                </span>
              </label>

              {/**   **/}
              <label htmlFor='InstituteEmail'>
                <small className='form-description'>Email</small>
                <input
                  type='email'
                  id='InstituteEmail'
                  name='instituteEmail'
                  className='form-input'
                  placeholder='Digite el correo de contacto'
                  ref={register({
                    required: true,
                    min: 1,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Correo no valido',
                    },
                  })}
                />
                <span className={`form-message text-${errors?.instituteEmail ? 'danger' : 'gray-600'}`}>
                  {errors?.instituteEmail && 'Email requerida'}
                  {errors?.instituteEmail && errors?.instituteEmail?.message}
                </span>
              </label>

              {/**   **/}
              <label htmlFor='InstituteTelephone'>
                <small className='form-description'>Telephone</small>
                <input
                  type='number'
                  id='InstituteTelephone'
                  name='instituteTelephone'
                  className='form-input'
                  placeholder='Digite el telefono de contacto'
                  ref={register({
                    required: true,
                    min: 1,
                    maxLength: 10,
                  })}
                />
                <span className={`form-message text-${errors?.instituteTelephone ? 'danger' : 'gray-600'}`}>
                  {errors?.instituteTelephone && 'Telephone requerida'}
                </span>
              </label>

              {/**   **/}
              <label htmlFor='InstituteDateFoundation'>
                <small className='form-description'>DateFoundation</small>
                <input
                  type='date'
                  className='form-input'
                  id='InstituteDateFoundation'
                  name='instituteDateFoundation'
                  placeholder='Digite la fecha de fundacion'
                  ref={register({
                    required: true,
                    min: 1,
                    maxLength: 10,
                  })}
                />
                <span className={`form-message text-${errors?.instituteDateFoundation ? 'danger' : 'gray-600'}`}>
                  {errors?.instituteDateFoundation && 'DateFoundation requerida'}
                </span>
              </label>

              {/**   **/}
              <label htmlFor='InstituteSlogan'>
                <small className='form-description'>Slogan</small>
                <textarea
                  id='InstituteSlogan'
                  name='instituteSlogan'
                  className='form-textarea no-resize'
                  placeholder='Digite el slogan'
                  rows={5}
                  ref={register({
                    required: true,
                    min: 1,
                    maxLength: 250,
                  })}
                />
                <span className={`form-message text-${errors?.instituteSlogan ? 'danger' : 'gray-600'}`}>
                  {!errors?.instituteSlogan && 'Max 250 caracteres'}
                  {errors?.instituteSlogan && 'Slogan requerida'}
                </span>
              </label>

              {/**  **/}
              <button type='submit' className='form-button btn'>Guardar</button>
            </form>
          )}
          {page === 2 && (
            <form className='form-control' onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor='ManagerName'>
                <small className='form-description'>Name</small>
                <input
                  type='text'
                  id='ManagerName'
                  name='managerName'
                  className='form-input'
                  placeholder='Digite el nombre'
                  ref={register({
                    required: true,
                    min: 1,
                    maxLength: 80,
                  })}
                />
                <span className={`form-message text-${errors?.managerName ? 'danger' : 'gray-400'}`}>
                  {errors?.managerName && 'Name requerido'}
                </span>
              </label>

              {/**   **/}
              <label htmlFor='ManagerEmail'>
                <small className='form-description'>Email</small>
                <input
                  type='email'
                  id='ManagerEmail'
                  name='managerEmail'
                  className='form-input'
                  placeholder='Digite el correo de contacto'
                  ref={register({
                    required: true,
                    min: 1,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Correo no valido',
                    },
                  })}
                />
                <span className={`form-message text-${errors?.managerEmail ? 'danger' : 'gray-600'}`}>
                  {errors?.managerEmail && 'Email requerida'}
                  {errors?.managerEmail && errors?.managerEmail?.message}
                </span>
              </label>

              {/**   **/}
              <label htmlFor='ManagerPassword'>
                <small className='form-description'>New Password</small>
                <input
                  type='password'
                  id='ManagerPassword'
                  name='managerPassword'
                  className='form-input'
                  placeholder='Digite la nueva contraseña'
                  ref={register({
                    required: true,
                    min: 1,
                    maxLength: 10,
                  })}
                />
                <span className={`form-message text-${errors?.managerPassword ? 'danger' : 'gray-600'}`}>
                  {errors?.managerPassword && 'Contraseña invalida'}
                </span>
              </label>

              {/**   **/}
              <label htmlFor='ManagerRepeatPassword'>
                <small className='form-description'>Repeat New Password</small>
                <input
                  type='password'
                  id='ManagerRepeatPassword'
                  name='managerRepeatPassword'
                  className='form-input'
                  placeholder='Repite la contraseña'
                  ref={register({
                    required: true,
                    min: 1,
                    maxLength: 10,
                  })}
                />
                <span className={`form-message text-${errors?.managerRepeatPassword ? 'danger' : 'gray-600'}`}>
                  {errors?.managerRepeatPassword && 'Contraseña invalida'}
                </span>
              </label>

              {/**   **/}
              {/* <label htmlFor='InstituteDateFoundation'>
                <small className='form-description'>DateFoundation</small>
                <input
                  type='date'
                  id='InstituteDateFoundation'
                  name='instituteDateFoundation'
                  className='form-input'
                  ref={register({
                    required: true,
                    min: 1,
                    maxLength: 10,
                  })}
                />
                <span className={`form-message text-${errors?.instituteDateFoundation ? 'danger' : 'gray-600'}`}>
                  {errors?.instituteDateFoundation && 'DateFoundation requerida'}
                </span>
              </label> */}

              {/**   **/}
              {/* <label htmlFor='InstituteSlogan'>
                <small className='form-description'>Slogan</small>
                <textarea
                  id='InstituteSlogan'
                  name='instituteSlogan'
                  className='form-textarea no-resize'
                  placeholder='Digite el slogan'
                  rows={5}
                  ref={register({
                    required: true,
                    min: 1,
                    maxLength: 250,
                  })}
                />
                <span className={`form-message text-${errors?.instituteSlogan ? 'danger' : 'gray-600'}`}>
                  {!errors?.instituteSlogan && 'Max 250 caracteres'}
                  {errors?.instituteSlogan && 'Slogan requerida'}
                </span>
              </label> */}

              {/**  **/}
              <button type='submit' className='form-button btn'>Guardar</button>
            </form>
          )}
        </div>
      </section>
    </>
  );
};

export default Settings;

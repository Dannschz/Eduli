import React from 'react';
import { useForm } from 'react-hook-form';
import './studentForm.scss';

export default function StudentForm() {
  const { register, handleSubmit, errors } = useForm();
  const formSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <div className='formStudentContainer'>
      <form className='form-control formS' onSubmit={handleSubmit(formSubmit)}>
        <label htmlFor='StudentName'>
          <small className='form-description'>Nombre</small>
          <input
            type='text'
            id='StudentName'
            name='studentName'
            className='form-input'
            placeholder='Digite el nombre'
            ref={register({
              required: true,
              min: 1,
              maxLength: 80,
            })}
          />
          <span
            className={`form-message text-${
              errors?.studentName ? 'danger' : 'gray-400'
            }`}
          >
            {errors?.studentName && 'Nombre requerido'}
          </span>
        </label>

        {/**   **/}
        <label htmlFor='StudentEmail'>
          <small className='form-description'>Email</small>
          <input
            id='StudentEmail'
            type='text'
            name='studentEmail'
            className='form-input'
            placeholder='Digite el email'
            ref={register({
              required: true,
              min: 1,
              maxLength: 80,
            })}
          />
          <span
            className={`form-message text-${
              errors?.studentEmail ? 'danger' : 'gray-400'
            }`}
          >
            {errors?.studentEmail && 'Email requerido'}
          </span>
        </label>
        <label htmlFor='StudentGender'>
          <small className='form-description'>Genero</small>
          <select
            id='StudentGender'
            name='studentGender'
            className='form-select background-none'
            ref={register({
              required: true,
              min: 1,
              maxLength: 80,
            })}
          >
            <option value='Sin Definir' defaultValue='Sin Definir'>
              Sin Definir
            </option>
            <option value='Masculino'>Masculino</option>
            <option value='Femenino'>Femenino</option>
          </select>
          <span
            className={`form-message text-${
              errors?.studentGender ? 'danger' : 'gray-400'
            }`}
          >
            {errors?.studentGender && 'Genero requerida'}
          </span>
        </label>
        <label htmlFor='StudentPassword'>
          <small className='form-description'>Contraseña</small>
          <input
            type='text'
            id='StudentPassword'
            name='studentPassword'
            className='form-input'
            placeholder='Digite su Contraseña'
            ref={register({
              required: true,
              min: 1,
              maxLength: 80,
            })}
          />
          <span
            className={`form-message text-${
              errors?.studentPassword ? 'danger' : 'gray-400'
            }`}
          >
            {errors?.studentPassword && 'Password requerido'}
          </span>
        </label>
        <button type='submit' className='form-button btn'>
          Guardar
        </button>
      </form>
    </div>
  );
}

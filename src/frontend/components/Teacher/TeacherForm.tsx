import React from 'react';
import { useForm } from 'react-hook-form';
import './teacherForm.scss';

export default function TeacherForm() {
  const { register, handleSubmit, errors } = useForm();
  const formSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className='formTeacher'>
      <h1>Lets add our new teacher</h1>
      <form className='form-control formT' onSubmit={handleSubmit(formSubmit)}>
        <label htmlFor='TeacherName'>
          <small className='form-description'>Nombre</small>
          <input
            type='text'
            id='TeacherName'
            name='teacherName'
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
              errors?.teacherName ? 'danger' : 'gray-400'
            }`}
          >
            {errors?.teacherName && 'Nombre requerido'}
          </span>
        </label>

        {/**   **/}
        <label htmlFor='TeacherEmail'>
          <small className='form-description'>Email</small>
          <input
            type='text'
            id='teacherEmail'
            name='teacherEmail'
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
              errors?.teacherEmail ? 'danger' : 'gray-400'
            }`}
          >
            {errors?.teacherEmail && 'Email requerido'}
          </span>
        </label>
        <label htmlFor='TeacherLevel'>
          <small className='form-description'>Nivel Académico</small>
          <select
            id='TeacherLevel'
            name='teacherLevel'
            className='form-select background-none'
            ref={register({
              required: true,
              min: 1,
              maxLength: 80,
            })}
          >
            <option value='Preescolar' defaultValue='Preescolar'>
              Preescolar
            </option>
            <option value='Primaria'>Primaria</option>
            <option value='Secundaria'>Secundaria</option>
            <option value='Medio Superior'>Medio Superior</option>
            <option value='Superior'>Superior</option>
          </select>
          <span
            className={`form-message text-${
              errors?.teacherLevel ? 'danger' : 'gray-400'
            }`}
          >
            {errors?.teacherLevel && 'Nivel Académico requerido'}
          </span>
        </label>
        <label htmlFor='TeacherGender'>
          <small className='form-description'>Genero</small>
          <select
            id='TeacherGender'
            name='teacherGender'
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
              errors?.teacherGender ? 'danger' : 'gray-400'
            }`}
          >
            {errors?.teacherGender && 'Genero requerida'}
          </span>
        </label>
        <label htmlFor='TeacherPassword'>
          <small className='form-description'>Contraseña</small>
          <input
            type='text'
            id='TeacherPassword'
            name='teacherPassword'
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
              errors?.teacherPassword ? 'danger' : 'gray-400'
            }`}
          >
            {errors?.teacherPassword && 'Password requerido'}
          </span>
        </label>
        <button type='submit' className='form-button btn'>
          Guardar
        </button>
      </form>
    </div>
  );
}

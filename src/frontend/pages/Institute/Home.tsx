import React from 'react';
import { useForm } from 'react-hook-form';
import { useStateValue } from '../../Context';

const Hero = require('../../static/assets/images/hero.svg');

const Home = () => {
  const { theme } = useStateValue();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <>
      <section className={`Hero ${theme}`}>
        <figure className='Hero__image'>
          <img src={Hero} alt='Book' />
        </figure>
        <div className='Hero__actions'>
          <h2 className='Hero__message'>
            Browse the lastest online education & teaching courses
          </h2>
          <h6>
            The new way to learn in the best school since 1990. Don&apos;t wait any longer to start
          </h6>
          <button type='button' className='btn'>
            Get started
          </button>
          <button type='button' className={`btn-outline ${theme}`}>
            Join now
          </button>
        </div>
      </section>
      <section className={`FilterCard ${theme}`}>
        <form onSubmit={handleSubmit(onSubmit)} className='form-control'>
          <label htmlFor='LevelSelect'>
            <small className='form-description'>Area</small>
            <select
              id='LevelSelect'
              name='levelSelect'
              className='form-select background-none'
              ref={register({ required: true })}
            >
              <option value='default'>Default</option>
              <option value='primaria'>Primaria</option>
              <option value='secundaria'>Secundaria</option>
              <option value='preparatoria'>Preparatoria</option>
              <option value='especialidad'>Especialidad</option>
              <option value='maestria'>Maestria</option>
            </select>
            <span className='form-message'>
              {errors.areaSelcted && errors.areaSelect.message}
            </span>
          </label>

          <label htmlFor='AreaSelect'>
            <small className='form-description'>Grado</small>
            <select
              disabled={true}
              id='AreaSelect'
              name='areaSelect'
              className='form-select background-none'
              ref={register({ required: true })}
            >
              <option value='default'>Default</option>
              <option value='primero'>1° de primaria</option>
              <option value='segundo'>2° de primaria</option>
              <option value='tercero'>3° de primaria</option>
              <option value='cuarto'>4° de primaria</option>
              <option value='quinto'>5° de primaria</option>
              <option value='sexto'>6° de primaria</option>
            </select>
            <span className='form-message'>
              {errors.areaSelcted && errors.areaSelect.message}
            </span>
          </label>

          <button type='submit' className='form-button btn'>
            Search
          </button>
        </form>
      </section>
    </>
  );
};

export default Home;

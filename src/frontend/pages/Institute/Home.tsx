import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../Context';

const Hero = require('../../static/assets/images/hero.svg');
const User = require('../../static/assets/images/hero4.jpg');

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

      <section className='InformationCards'>
        <div className={`Card ${theme}`}>
          <div className='Card__header'>
            <i className='fas fa-book' />
            <h5>Get Starter</h5>
          </div>
          <div className='Card__body'>
            <h6>Informatic Courses</h6>
            <p>Like bussines analytics, graphic, desing, and more...</p>
          </div>
        </div>

        <div className={`Card ${theme}`}>
          <div className='Card__header'>
            <i className='fas fa-atom' />
            <h5>Research</h5>
          </div>
          <div className='Card__body'>
            <h6>Lab innovation</h6>
            <p>In high-demand fields like IT, AI and cloud engineering</p>
          </div>
        </div>

        <div className={`Card ${theme}`}>
          <div className='Card__header'>
            <i className='fas fa-globe-americas' />
            <h5>Remote Study</h5>
          </div>
          <div className='Card__body'>
            <h6>Study from anywhere</h6>
            <p>With on-demand training and development</p>
          </div>
        </div>
      </section>

      <section className='Schedules'>
        <div className='Schedules__header'>
          <h3>Class Schedules & upcoming couses on education</h3>
          <p>87% of people learning for profesional development report career benefits like getting a promotion, a rise, or starting a ner career.</p>
        </div>
        <div className='Schedules__body'>
          <div className='Schedules__body--first'>
            <div className='Card2'>
              <div className='Card2__header'>
                <figure className='Card2__header--image'>
                  <img src={User} alt='Avatar' />
                </figure>
                <p><strong>Pedro Gonzalez</strong></p>
                <p>Lic. Maths</p>
              </div>
              <div className='Card2__body'>
                <p><strong>Class Time</strong></p>
                <h4>11:45 am</h4>
                <p>Monday-Wednesday</p>
              </div>
              <div className='Card2__footer'>
                <p>Class Reminder</p>
                <div className='ToggleSwitch'>
                  <button type='button' disabled className='ToggleSwitch--item active'>|</button>
                  <button type='button' disabled className='ToggleSwitch--item'>o</button>
                </div>
              </div>
            </div>

            <div className='Card2'>
              <div className='Card2__body'>
                <div className='ToggleSwitch'>
                  <button type='button' disabled className='ToggleSwitch--item active'>|</button>
                  <button type='button' disabled className='ToggleSwitch--item'>o</button>
                </div>
                <p><strong>Class Time</strong></p>
                <h4>Next week</h4>
                <p>Monday-Wednesday</p>
              </div>
            </div>
          </div>

          <div className={`Card2 background-${theme === 'light' ? 'white' : 'black'}`}>
            <div className='Card2__header'>
              <figure className='Card2__header--icon'>
                <i className='fas fa-shield-alt' />
              </figure>
            </div>
            <div className='Card2__body'>
              <p><strong>Money back guarantee</strong></p>
              <p>Demonstrate your new skills by sharing your Course certificate. Profesional Certificate</p>
            </div>
            <div className='Card2__footer'>
              <Link to='/' className={`btn-link${theme === 'light' ? '' : '-soft'}`}>Learn More</Link>
            </div>
          </div>

          <div className='Schedules__body--last'>
            <h6>Start streaming on-demand video lectures today from top instructors in subject like bussines</h6>
            <p>87% of people learning for profesional development report career benefits like getting a promotion, a rise, or starting a ner career.</p>
            <Link to='/' className={`btn-link${theme === 'light' ? '' : '-soft'}`}>
              Explore
              <i className='fas fa-angle-right' />
            </Link>
          </div>
        </div>
      </section>

      <section className=''>
        <div className='__header'>
          <h3>World-class learning for anyone, anyware</h3>
          <p>We&apos;ve got the solution. Worl-class training and development programs developed by top universities and companies. All on Eduli from bussines</p>
        </div>
        {/* <div className='__body'>

        </div> */}
      </section>
    </>
  );
};

export default Home;

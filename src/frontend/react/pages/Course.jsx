import React, { useState } from 'react';
// import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProfileCard5 from '../components/cards/ProfileCard5';
// import BecomeInTeam from '../components/cards/BecomeInTeam';
import MaterialAccordion from '../components/accordions/MaterialAccordion';
import QuestionAccordion from '../components/accordions/QuestionAccordion';
import Image from '../../assets/images/not-found1.png';
import Avatar from '../../assets/images/draw-teacher.png';

const Course = (props) => {
  const { institute, user, location } = props;
  const str = location.pathname.replace(/\/course\//g, '');
  const [course] = institute.courses.filter((course) => course._id === str);
  const hasUser = Object.keys(user).length !== 0;

  const getTopic = (id) => {
    const [topic] = institute.topics.filter((topic) => topic._id === id);
    return topic;
  };

  // const getCourse = (id) => {
  //   let obj;
  //   // eslint-disable-next-line array-callback-return
  //   institute.courses.map((courses) => courses.map((cor) => {
  //     if (cor._id === id) {
  //       obj = cor;
  //     }
  //   }));
  //   return obj;
  // };

  // const course = getCourse(str);

  // console.log(hasUser);
  // console.log(course);

  // const { title, description, image, requirements, videos, archives } = props;
  // const [searchFocus, setSearchFocus] = useState(false);
  const [messageFocus, setMessageFocus] = useState(false);
  const [error, setError] = useState(false);

  // return (
  //   <h1>Course</h1>
  // );

  return (
    <section className='Course'>
      {!hasUser && (
        <Link to='/' type='button' className='btn-danger go-back'>
          Inicio
        </Link>
      )}
      <div className='Course__hero background-gray text-white'>
        <div className='column-2'>
          <div>
            <h1 className='Course__hero--title'>{course?.name}</h1>
            <p className='Course__hero--description'>{course?.description}</p>
            {hasUser && (
              <Link to='/player' className='Course__hero--action btn-acent left'>
                <i className='fas fa-play' />
                _ Continuar
                {' '}
                <strong>clase 2</strong>
              </Link>
            )}
          </div>
          <div className='Course__hero--image center'>
            <img className='image-cover' src={course?.image || Image} alt='' />
          </div>
        </div>
      </div>

      <div className='Course__body column-2'>
        <div className='Course__body--requirements border-thin'>
          <h2>Requerimientos</h2>
          <p>{course?.requirements}</p>
        </div>

        <div className='Course__body--foro border-thin'>
          <h3 className='v-center'>Preguntas y respuestas</h3>
          <div className='foro__filter column-4 column-gap-sm'>
            <button type='button' className='btn-light btn-sm'>
              Mejores
            </button>
            <button type='button' className='btn-light btn-sm'>
              Sin responder
            </button>
            <button type='button' className='btn-light btn-sm'>
              Mis preguntas
            </button>
            <select className='btn-light btn-sm' id=''>
              <option value=''>Mas recientes</option>
              <option value=''>Mas antiguos</option>
            </select>
          </div>

          <form action='' className='foro__filter--message form-group v-center'>
            <div className='icon-input-button'>
              <span
                className={`${
                  messageFocus ? 'background-secondary text-white' : ''
                } border-thin`}
              >
                <i className='fas fa-envelope' />
              </span>
              <input
                id='SeacherInput'
                className='form-control'
                placeholder='Escribe tu comentario'
                type='text'
                onFocus={() => setMessageFocus(true)}
                onBlur={() => setMessageFocus(false)}
              />
              <small className={`text-danger ${error ? 'visible' : 'unseen'}`}>
                Digite una pregunta valida
              </small>
              <button
                type='button'
                className='btn btn-secondary'
                onClick={() => setError(true)}
              >
                Publicar
              </button>
            </div>
          </form>

          <ul className='foro__messages row-gap-sm'>
            <QuestionAccordion question='Esto es un pregunta ejemplo' response='Esto es una respuesta ejemplo' />
            <QuestionAccordion question='Esto es un otra pregunta ejemplo' response='Esto es una respuesta ejemplo' />
            <QuestionAccordion question='Esto es un y otra pregunta ejemplo' response='Esto es una respuesta ejemplo' />
            <QuestionAccordion question='Esto es un y todavia otra pregunta ejemplo' response='Esto es una respuesta ejemplo' />
            <QuestionAccordion question='Esto es un y todavia otra pregunta ejemplo' response='Esto es una respuesta ejemplo' />
            <button type='button' className='grid right btn-link-blue'>Ver más ...</button>
          </ul>
        </div>

        <div className='Course__body--material row-gap-md'>
          <div className='temary-info column-3 v-center'>
            <h3>Contenido del curso</h3>
            <span className='text-gray-700'>{`${course?.temary.length} clases`}</span>
            <span className='text-gray-700'>{`${course?.temary.length} archivos`}</span>
          </div>
          {course?.temary.map((temary) => (
            <React.Fragment key={temary}>
              <MaterialAccordion
                id={getTopic(temary).video}
                title={getTopic(temary).name || 'Tema'}
                videos={1}
                archives={1}
                videoName={getTopic(temary).name || 'Video'}
                fileName={getTopic(temary).name || 'Ejercicio'}
                disable={!hasUser}
              />
            </React.Fragment>
          ))}
          {/* <MaterialAccordion
            title='Multiplicacion'
            videos={2}
            archives={2}
            videoName='sumas'
            fileName='sumas'
          />
          <MaterialAccordion
            title='Division'
            videos={2}
            archives={2}
            videoName='sumas'
            fileName='sumas'
          />
          <MaterialAccordion
            title='Numeros naturales'
            videos={2}
            archives={2}
            videoName='sumas'
            fileName='sumas'
          />
          <MaterialAccordion
            title='Geometria'
            videos={2}
            archives={2}
            videoName='sumas'
            fileName='sumas'
          /> */}
        </div>
        <div className='Course__body--actions'>
          <button type='button' className='btn btn-secondary'>
            {course?.approved ? 'Descargar diploma' : 'Presentar examen'}
          </button>
        </div>
        <div className='Course__footer--teacher'>
          <p>Profesor del curso:</p>
          <ProfileCard5 avatar={course?.teacher?.avatar || Avatar} name={course?.teacher?.name || 'Profesor'} />
        </div>
        {/* <div className='Course__footer--institution'>
          <p>Institucion a la que pertenece el curso:</p>
          <BecomeInTeam />
        </div> */}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    institute: state.institute,
  };
};

Course.propTypes = {
  user: PropTypes.object,
  institute: PropTypes.object,
};

export default connect(mapStateToProps, null)(Course);
// export default Course;

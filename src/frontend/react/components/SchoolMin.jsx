import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProfileCard3 from './cards/ProfileCard3';
import Avatar from '../../assets/images/draw-teacher.png';

const LevelCard3 = (props) => {
  const { id, name, status, average } = props;
  const route = status === 'in-progress' ? '/' : `/level/${id}`;
  return (
    <div className={`LevelCard3 ${status}`}>
      <div className={`LevelCard3__header ${status}`}>
        <h3 className='text-white center v-center'>
          {status === 'approved' && (<>All the best!</>)}
          {status === 'failed' && (<>Game Over!</>)}
          {status === 'in-progress' && (<>In Progress!</>)}
          {status === 'lock' && (<>Lock!</>)}
        </h3>
      </div>
      <div className='LevelCard3__body'>
        <span className='LevelCard3__body--status'>
          {status === 'approved' && (<>Nivel aprovado!</>)}
          {status === 'failed' && (<>Nivel reprobado!</>)}
          {status === 'in-progress' && (<>Nivel en progreso!</>)}
          {status === 'lock' && (<>Nivel bloqueado!</>)}
        </span>
        <h4 className='LevelCard3__body--title'>{name}</h4>
        <div className='LevelCard3__body--details column-2'>
          <h6>Promedio:</h6>
          {' '}
          <span className={`${status === 'approved' ? 'text-success' : status === 'failed' ? 'text-danger' : 'text-gray-500'}`}>
            {status === 'approved' && (<strong>{average}</strong>)}
            {status === 'failed' && (<>Reprobado</>)}
            {status === 'in-progress' && (<>En progreso</>)}
            {status === 'lock' && (<>Sin cursar</>)}
          </span>
        </div>
        <div className='LevelCard3__body--actions column-2'>
          <Link to={route} className={`btn btn-left ${status}`}>
            {status === 'approved' && (<>Diploma</>)}
            {status === 'failed' && (<>Vida extra</>)}
            {status === 'in-progress' && (<>Continuar</>)}
            {status === 'lock' && (<>Info</>)}
          </Link>
          <button type='button' className={`btn btn-right ${status}`}>
            {status === 'approved' && (<>Ver</>)}
            {status === 'failed' && (<>Continuar</>)}
            {status === 'in-progress' && (<>Finalizar</>)}
            {status === 'lock' && (<>Liberar</>)}
          </button>
        </div>
      </div>
    </div>
  );
};

const teachers = [
  {
    id: 100,
    name: 'Neil D. Sims',
    course: 'Matematicas',
    description: 'Neil drives the technical strategy of the platform and brand.',
  },
  {
    id: 101,
    name: 'Neil D. Sims',
    course: 'Matematicas',
    description: 'Neil drives the technical strategy of the platform and brand.',
  },
  {
    id: 102,
    name: 'Neil D. Sims',
    course: 'Matematicas',
    description: 'Neil drives the technical strategy of the platform and brand.',
  },
  {
    id: 103,
    name: 'Neil D. Sims',
    course: 'Matematicas',
    description: 'Neil drives the technical strategy of the platform and brand.',
  },
  {
    id: 104,
    name: 'Neil D. Sims',
    course: 'Matematicas',
    description: 'Neil drives the technical strategy of the platform and brand.',
  },
];

const handlerPrev = (page, setPage, setView, list, size) => {
  const _page =
    page === 0 ?
      (list.length - list.length) % size :
      page - size < 0 ?
        0 :
        page - size;
  setPage(_page);
  setView(list.slice(_page, _page + size));
};

const handlerNext = (page, setPage, setView, list, size) => {
  const _page = page + size >= list.length ? 0 : page + size;
  setPage(_page);
  setView(list.slice(_page, _page + size));
};

const SchoolMin = (props) => {

  const { institute, user } = props;

  const { levels } = institute;

  const [page, setPage] = useState(0);
  const [viewList, setViewList] = useState(levels.slice(page, page + 4));

  const [teacherPage, setTeacherPage] = useState(0);
  const [viewTeacherList, setTeacherViewList] = useState(teachers.slice(teacherPage, teacherPage + 4));

  const isApproved = (id) => {
    let approved = false;
    // eslint-disable-next-line array-callback-return
    user.approvedLevels?.map((level) => {
      if (level === id) {
        approved = true;
      }
    });
    return approved;
  };

  const isFailed = (id) => {
    let failed = false;
    // eslint-disable-next-line array-callback-return
    user.failedLevels?.map((level) => {
      if (level === id) {
        failed = true;
      }
    });
    return failed;
  };

  return (
    <div className='SchoolMin'>
      <div className='SchoolMin__header'>
        <h1>Informacion</h1>
      </div>

      <div className='SchoolMin__body'>
        <div className={`SchoolMin__body--levels ${page === 0 ? 'column-3' : 'column-4'} ${page + 4 > levels.length ? 'column-3' : ''}`}>
          <div className='center v-center'>
            <h2>Progreso</h2>
          </div>

          {page !== 0 && (
            <i
              role='presentation'
              className='fas fa-angle-double-left levels--prev center v-center'
              onClick={() => handlerPrev(page, setPage, setViewList, levels, 4)}
            />
          )}
          <ul className='levels--items column-8 v-center'>
            {viewList.map((level) => (
              <React.Fragment key={level._id}>
                <li key={level._id}>
                  <LevelCard3
                    id={level._id}
                    name={level.name}
                    status={level._id === user.level._id ? 'in-progress' : isApproved(level._id) ? 'approved' : isFailed(level._id) ? 'failed' : 'lock'}
                    locked={level._id === user.level._id}
                    approved={isApproved(level._id)}
                    average={isApproved(level._id) ? '9.5' : isFailed(level._id) ? '5.0' : level.average}
                  />
                </li>
                <li key={level.id + 2000} className={`LevelCard3--spacer ${level.status} v-center`} />
              </React.Fragment>
            ))}
            {page + 4 > levels.length && (
              <div className='LevelCard3 background-white text-blue text-center'>
                <h3 className='center v-center'>No hay mas que mostrar</h3>
              </div>
            )}
          </ul>
          {page + 4 < levels.length && (
            <i
              role='presentation'
              className='fas fa-angle-double-right levels--next center v-center'
              onClick={() => handlerNext(page, setPage, setViewList, levels, 4)}
            />
          )}
        </div>

        <div className='SchoolMin__body--divider'>
          <div className='divider' />
        </div>

        <div className={`SchoolMin__body--teachers column-gap-sm ${teacherPage === 0 ? 'column-3' : 'column-4'} ${teacherPage + 4 > teachers.length ? 'column-3' : ''}`}>
          <div className='center v-center'>
            <h2>Tus maestros</h2>
          </div>

          {Object.keys(user.level).length === 0 && (
            <h1 className='column-end-2'>Inscribete a un nivel para interactuar con profesores</h1>
          )}

          {teacherPage !== 0 && Object.keys(user.level).length !== 0 && (
            <i
              role='presentation'
              className='fas fa-angle-double-left levels--prev center v-center'
              onClick={() => handlerPrev(teacherPage, setTeacherPage, setTeacherViewList, teachers, 4)}
            />
          )}
          {Object.keys(user.level).length !== 0 && (
            <ul className='teachers--items column-4 column-gap-sm v-center'>
              {viewTeacherList.map((teacher) => (
                <li key={teacher.id}>
                  <ProfileCard3
                    image={Avatar}
                    name={teacher.name}
                    course={teacher.course}
                    description={teacher.description}
                  />
                </li>
              ))}
            </ul>
          )}
          {teacherPage + 4 < levels.length && Object.keys(user.level).length !== 0 && (
            <i
              role='presentation'
              className='fas fa-angle-double-right levels--next center v-center'
              onClick={() => handlerNext(teacherPage, setTeacherPage, setTeacherViewList, teachers, 4)}
            />
          )}
        </div>

        <div className='SchoolMin__body--divider'>
          <div className='divider' />
        </div>
      </div>

      <div className='SchoolMin__footer background-gray'>
        <div className='SchoolMin__footer--title text-white center text-center'>
          <h2>Contact Us</h2>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis non odit necessitatibus nostrum neque sunt iure vel voluptatibus fugiat?</p>
        </div>
        <div className='SchoolMin__footer--info background-white center'>
          <div>
            <i className='fas fa-map-marker-alt' />
            <h6>Address</h6>
            <span>Ciudad de México</span>
          </div>
          <div>
            <i className='fas fa-location-arrow' />
            <h6>Pagina Principal</h6>
            <span>eduli.com</span>
          </div>
          <div>
            <i className='fas fa-phone' />
            <h6>Phone</h6>
            <span>+00 12-34-56-78-90</span>
          </div>
        </div>

        <div className='SchoolMin__footer--contact text-white'>
          <form className='form-group'>
            <label htmlFor='EmailSubject'>Tema</label>
            <input type='text' id='EmailSubject' className='form-control' placeholder='Subject' />
            <label htmlFor='EmailMessage'>Mensaje</label>
            <textarea id='EmailMessage' cols='30' rows='10' className='form-control' placeholder='Escribe tu mensaje aqui ...' />
            <button type='button' className='btn btn-blue'>Envia tu mensaje</button>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    institute: state.institute,
    user: state.user,
  };
};

SchoolMin.propTypes = {
  institute: PropTypes.object,
  user: PropTypes.object,
};

export default connect(mapStateToProps, null)(SchoolMin);

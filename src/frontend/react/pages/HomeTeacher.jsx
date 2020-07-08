import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// Components
import BlogCard6 from '../components/cards/BlogCard6';
import AddMaterial from '../components/forms/AddMaterial';
import LeftMenu from '../components/menu/LeftMenu';
import Modal from '../components/Modal';
import Pagination from '../components/Pagination';
import NotFound from './NotFound';
// Images
import Image from '../../assets/images/not-found1.png';

const HomeTeacher = (props) => {

  const { institute, user } = props;

  const getCourses = (id) => {
    const [course] = institute?.courses?.filter((course) => course._id === id);
    return course;
  };

  const isApproved = (id) => {
    let approved = false;
    // eslint-disable-next-line array-callback-return
    user?.approvedCourses?.map((level) => {
      if (level === id) {
        approved = true;
      }
    });
    return approved;
  };

  const courses = user?.courses?.map((course) => getCourses(course));

  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState(false);
  const [tab, setTab] = useState('cursos');

  const [courseActive, setCourseActive] = useState(1);
  const [viewCourse, setViewCourse] = useState(courses.slice((courseActive - 1) * 3, courseActive * 3));

  useEffect(() => {
    setViewCourse(courses.slice((courseActive - 1) * 3, courseActive * 3));
  }, [courseActive, tab]);

  return (
    <section className='HomeTeacher'>

      <LeftMenu
        tab={tab}
        setTab={setTab}
        item1={{ content: 'instituto', icon: 'fas fa-school' }}
        item2={{ content: 'cursos', icon: 'fas fa-graduation-cap' }}
      />

      <div className='HomeTeacher__header column-3'>
        <div className='HomeTeacher__header--title column-2'>
          <h1 className='single-line'>{tab || 'Tablero'}</h1>
        </div>
        <button type='button' className='btn-primary center' onClick={() => setOpen(!open)}>Subir material</button>
        <button type='button' className='btn-primary center' onClick={() => {}}>Crear Curso</button>
      </div>

      <div className='HomeTeacher__filter column-2'>
        <div className='HomeTeacher__filter--sort column-5'>
          <button type='button' className='btn-white' onClick={() => setSort(!sort)}>
            Archivos
            {' '}
            <i className={`fas fa-sort-${sort ? 'down' : 'up'}`} />
          </button>
          <button type='button' className='btn-white'>
            Videos
            {' '}
            <i className='fas fa-sort-down' />
          </button>
          <button type='button' className='btn-white'>
            Alumnos
            {' '}
            <i className='fas fa-sort-down' />
          </button>
          <button type='button' className='btn-white'>
            Name (A-Z)
          </button>
          <select className='form-select btn-white v-center' id=''>
            <option value=''>Mas recientes</option>
            <option value=''>Mas antiguos</option>
          </select>
        </div>
        <div className='right'>
          <form className='HomeTeacher__filter--form icon-input-button'>
            <label htmlFor='TeacherSearch' className='filter--label left'>Buscar</label>
            <span className='filter--icon'><i className='fas fa-search' /></span>
            <input id='TeacherSearch' className='filter--input' placeholder='Que desea encontrar' type='text' />
            <button type='button' className='filter--button btn-primary'>Buscar</button>
          </form>
        </div>
      </div>

      <div className='HomeTeacher__courses'>
        {tab === 'instituto' && (
          <NotFound />
        )}
        {tab === 'cursos' && (
          <>
            <ul className='column-3 column-gap-xl'>
              {viewCourse?.map((course) => (
                <li key={course._id}>
                  <BlogCard6
                    course={course.name}
                    image={course.image || Image}
                    title={course.name}
                    description={course.description}
                    approved={isApproved(course._id)}
                    color={course.color || 'primary'}
                  />
                </li>
              ))}
            </ul>
            <Pagination
              length={courses.length || 0}
              visibleElements={3}
              list={courses}
              active={courseActive}
              setActive={setCourseActive}
            />
          </>
        )}
      </div>
      <Modal isOpen={open} onClose={() => setOpen(!open)}><AddMaterial onClose={() => setOpen(!open)} /></Modal>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    institute: state.institute,
    user: state.user,
  };
};

HomeTeacher.propTypes = {
  institute: PropTypes.object,
  user: PropTypes.object,
};

export default connect(mapStateToProps, null)(HomeTeacher);

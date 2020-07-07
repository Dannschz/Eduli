import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// Components
import BlogCard6 from '../components/cards/BlogCard6';
import AddMaterial from '../components/forms/AddMaterial';
import LeftMenu from '../components/menu/LeftMenu';
// Images
// import Course1 from '../../assets/images/school1.jpg';
// import Course2 from '../../assets/images/school2.jpg';
// import Course3 from '../../assets/images/school3.jpg';
// import Logo1 from '../../assets/images/logo2.png';
// import Logo2 from '../../assets/images/logo4.png';
import Image from '../../assets/images/not-found1.png';
import Modal from '../components/Modal';
import Pagination from '../components/Pagination';
import NotFound from './NotFound';

// const lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, unde, quidem dignissimos, cumque magnam sit omnis veritatis totam ipsam voluptatem tempore laboriosam eius recusandae dolorem sunt! Illo quas voluptatum nihil.';

// const courses = [
//   {
//     id: 1,
//     level: '1° de primaria',
//     image: '',
//     title: 'Matematicas 1',
//     description: lorem,
//     approved: true,
//     color: 'blue',
//   },
//   {
//     id: 2,
//     level: '2° de primaria',
//     image: Course3,
//     title: 'Matematicas 2',
//     description: lorem,
//     approved: false,
//     color: 'red',
//   },
//   {
//     id: 3,
//     level: '1° de primaria',
//     image: '',
//     title: 'Español 1',
//     description: lorem,
//     approved: false,
//     color: 'blue',
//   },
//   {
//     id: 4,
//     level: '3° de primaria',
//     image: '',
//     title: 'Matematicas 3',
//     description: lorem,
//     approved: true,
//     color: 'secondary',
//   },
//   {
//     id: 5,
//     level: '3° de primaria',
//     image: Course2,
//     title: 'Español 3',
//     description: lorem,
//     approved: true,
//     color: 'secondary',
//   },
//   {
//     id: 6,
//     level: '5° de primaria',
//     image: Course1,
//     title: 'Matematicas 5',
//     description: lorem,
//     approved: true,
//     color: 'pink',
//   },
//   {
//     id: 7,
//     level: '6° de primaria',
//     image: '',
//     title: 'Matematicas 6',
//     description: lorem,
//     approved: false,
//     color: 'purple',
//   },
//   {
//     id: 8,
//     level: '4° de primaria',
//     image: '',
//     title: 'Matematicas 4',
//     description: lorem,
//     approved: false,
//     color: 'green',
//   },
// ];

const HomeTeacher = (props) => {

  const { institute, user } = props;

  const getCourses = (id) => {
    const [course] = institute.courses?.filter((course) => course._id === id);
    return course;
  };

  const isApproved = (id) => {
    let approved = false;
    // eslint-disable-next-line array-callback-return
    user.approvedCourses?.map((level) => {
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

  // const [coursesFilter, setCourseFilter] = useState(courses.filter((obj) => obj.level === tab));
  // const [viewCourseFilter, setViewCourseFilter] = useState(coursesFilter.slice((courseActive - 1) * 3, courseActive * 3));

  useEffect(() => {
    setViewCourse(courses.slice((courseActive - 1) * 3, courseActive * 3));
    // setCourseFilter(courses.filter((obj) => obj.level === tab));
    // setViewCourseFilter(coursesFilter.slice((courseActive - 1) * 3, courseActive * 3));
  }, [courseActive, tab]);

  return (
    <section className='HomeTeacher'>
      {/* <div className="HomeTeacher__filter border-thin">
        <form action="" className="HomeTeacher__filter--searcher v-center center">
          <label htmlFor="" className="left">Buscar</label>
          <input placeholder="Que contenido deseas buscar" type="text"/>
          <button type='button' className="btn btn-secondary">buscar</button>
        </form>
        <ul className='HomeTeacher__filter--instituciones'>
          <li className="instituciones--item">Escualea patito</li>
          <li className="instituciones--item">Eduli</li>
          <li className="instituciones--item">Escuela Polifasetica</li>
        </ul>
        <ul className='HomeTeacher__filter--divisiones'>
          <li>Primaria</li>
          <li>Secundaria</li>
          <li>Lincenciatura en computacion</li>
        </ul>
      </div> */}

      <LeftMenu
        tab={tab}
        setTab={setTab}
        item1={{ content: 'instituto', icon: 'fas fa-school' }}
        item2={{ content: 'cursos', icon: 'fas fa-graduation-cap' }}
        // item3={{ content: '1° de primaria', icon: 'fas fa-chalkboard-teacher' }}
        // item4={{ content: '2° de primaria', icon: 'fas fa-chalkboard-teacher' }}
        // item5={{ content: '3° de primaria', icon: 'fas fa-chalkboard-teacher' }}
        // item6={{ content: '4° de primaria', icon: 'fas fa-chalkboard-teacher' }}
        // item7={{ content: '5° de primaria', icon: 'fas fa-chalkboard-teacher' }}
        // item8={{ content: '6° de primaria', icon: 'fas fa-chalkboard-teacher' }}
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
          {/* <button type='button' className="btn btn-outline btn-xs">
            Mensajes <i className="fas fa-sort-down"></i>
          </button> */}
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
        {/* {tab !== 'courses' && tab !== 'institute' && (
          <>
            <ul className='column-3 column-gap-xl'>
              {viewCourseFilter?.map((course) => (
                <li key={course.id}>
                  <BlogCard6
                    course={course.level}
                    image={course.image}
                    title={course.title}
                    description={course.description}
                    approved={course.approved}
                    color={course.color}
                  />
                </li>
              ))}
            </ul>
            <Pagination
              length={coursesFilter.length || 0}
              visibleElements={3}
              list={coursesFilter}
              active={courseActive}
              setActive={setCourseActive}
            />
          </>
        )} */}
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

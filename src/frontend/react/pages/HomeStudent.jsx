import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// Components
import BlogCard3 from '../components/cards/BlogCard3';
import BlogCard1 from '../components/cards/BlogCard1';
import LeftMenu from '../components/menu/LeftMenu';
import SchoolMin from '../components/SchoolMin';
import Pagination from '../components/Pagination';
import LevelStudent from './LevelStudent';

const HomeStudent = (props) => {
  const { institute, user } = props;

  const getCourses = (id) => {
    const [course] = institute?.courses?.filter((course) => course._id === id);
    return course;
  };

  const courses = user.level?.courses?.map((course) => getCourses(course));
  const activities = Object.keys(user.level)?.length !== 0 ? institute?.videos : null;

  const [active, setActive] = useState(1);
  const [courseActive, setCourseActive] = useState(1);
  const [view, setView] = useState(activities?.slice((active - 1) * 5, active * 5));
  const [viewCourse, setViewCourse] = useState(courses?.slice((courseActive - 1) * 5, courseActive * 5));

  const [tab, setTab] = useState('misiones');

  useEffect(() => {
    setView(activities?.slice((active - 1) * 5, active * 5));
    setViewCourse(courses?.slice((courseActive - 1) * 5, courseActive * 5));
  }, [active, courseActive]);

  return (
    <section className='HomeStudent'>
      <LeftMenu
        tab={tab}
        setTab={setTab}
        item1={{ content: 'institucion', icon: 'fas fa-graduation-cap' }}
        item2={{ content: 'niveles', icon: 'fas fa-layer-group' }}
        item3={{ content: 'cursos', icon: 'fas fa-chalkboard' }}
        item4={{ content: 'misiones', icon: 'fas fa-brain' }}
      />

      {tab !== 'niveles' && tab !== 'institucion' && (
        <div className='HomeStudent__header column-2'>
          <div className='left'>
            <h1>{tab}</h1>
          </div>
          {Object.keys(user.level).length !== 0 && (
            <div className='right'>
              <form className='HomeTeacher__filter--form'>
                <label htmlFor='TeacherSearch' className='filter--label left'>
                  Buscar
                </label>
                <span className='filter--icon'>
                  <i className='fas fa-search' />
                </span>
                <input
                  id='TeacherSearch'
                  className='filter--input'
                  placeholder='Que desea encontrar'
                  type='text'
                />
                <button type='button' className='filter--button btn btn-secondary'>
                  Buscar
                </button>
              </form>
            </div>
          )}
        </div>
      )}

      {tab === 'institucion' && (
        <div className='HomeStudent__institute'>
          <SchoolMin />
        </div>
      )}

      {tab === 'niveles' && (
        <div className='HomeStudent__levels'>
          {Object.keys(user.level).length !== 0 && <LevelStudent />}
          {Object.keys(user.level).length === 0 && (
            <div className='center v-center row-gap-md'>
              <h1>No tienes nivel</h1>
              <button type='button' className='btn-secondary'>Buscar un nivel</button>
            </div>
          )}
        </div>
      )}

      {tab === 'misiones' && (
        <div className='HomeStudent__videos'>
          {!activities && (
            <div className='center v-center row-gap-md'>
              <h1>No tienes misiones</h1>
              <button type='button' className='btn-secondary'>Buscar un nivel</button>
            </div>
          )}
          {activities && (
            <ul className='column-5 column-gap-md'>
              {view.map((item) => (
                <li key={item._id}>
                  <BlogCard1
                    id={item._id}
                    title={item.name}
                    course={user.level.name}
                    description={item.description}
                  />
                </li>
              ))}
            </ul>
          )}
          {activities && (
            <Pagination
              length={activities?.length || 0}
              visibleElements={5}
              list={activities}
              active={active}
              setActive={setActive}
            />
          )}
        </div>
      )}

      {tab === 'cursos' && (
        <div className='HomeStudent__courses'>
          {!courses && (
            <div className='center v-center row-gap-md'>
              <h1>No tienes ningun curso</h1>
              <button type='button' className='btn-secondary'>Buscar un nivel</button>
            </div>
          )}
          {courses && (
            <ul className='column-5 column-gap-md'>
              {viewCourse.map((item) => (
                <li key={item._id}>
                  <BlogCard3
                    id={item._id}
                    title={item.name}
                    details={{ description: item.description, videos: 10, files: 10 }}
                    avatar={item.avatar}
                    teacher={item.teacher.name}
                    completed={50}
                  />
                </li>
              ))}
            </ul>
          )}
          {courses && (
            <Pagination
              length={courses?.length || 0}
              visibleElements={5}
              list={courses}
              active={courseActive}
              setActive={setCourseActive}
            />
          )}
        </div>
      )}
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    institute: state.institute,
    user: state.user,
  };
};

HomeStudent.propTypes = {
  institute: PropTypes.object,
  user: PropTypes.object,
};

export default connect(mapStateToProps, null)(HomeStudent);

import React, { useState } from 'react';
// import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { getData } from '../actions';
import ProfileCard1 from '../components/cards/ProfileCard1';
import Teacher from '../../assets/images/draw-teacher.png';

const teachers = [
  {
    id: 1,
    avatar: Teacher,
    name: 'Bonnie M. Green',
    title: 'Web Developer',
  },
  {
    id: 2,
    avatar: Teacher,
    name: 'Bonnie M. Green',
    title: 'Web Developer',
  },
  {
    id: 3,
    avatar: Teacher,
    name: 'Bonnie M. Green',
    title: 'Web Developer',
  },
];

const Level = (props) => {
  const { institute, user, location } = props;
  const str = location.pathname.replace(/\/level\//g, '');
  const [level] = institute.levels.filter((level) => level._id === str);
  const [active, setActive] = useState(false);
  const hasUser = Object.keys(user).length !== 0;
  // const [loading, setLoading] = useState(true);

  // console.log(institute.courses);
  // const getCourse = (id) => null;

  // return (
  //   <div>
  //     <h1>{`Hola ${hasUser}`}</h1>
  //     <h1>{`institute ${Array.isArray(institute)}`}</h1>
  //     <h1>{`level ${level}`}</h1>
  //   </div>
  // );

  // const getCourse = (id) => {
  //   let obj;
  //   // eslint-disable-next-line array-callback-return
  //   institute.courses.map((courses) => courses.map((cor) => {
  //     if (cor._id === id) {
  //       obj = cor;
  //     }
  //   }));
  //   return obj?.name;
  // };

  const getCourse = (id) => {
    const [course] = institute.courses.filter((course) => course._id === id);
    return course.name;
  };

  // useEffect(() => {
  //   console.log(level);
  //   if (level) {
  //     setLoading(false);
  //   }
  // }, [level]);

  // if (loading) {
  //   return (
  //     <h1>Loading...</h1>
  //   );
  // }

  return (
    <div className='Level'>
      {!hasUser && (
        <Link to='/' type='button' className='btn-danger go-back'>
          Inicio
        </Link>
      )}
      <div className='Level__header background-gray text-white'>
        <div className={`Level__header--image center v-center background-${level?.color || 'blue'}`}>
          <i className='fas fa-graduation-cap' />
        </div>
        <div className='Level__header--title v-center'>
          <h1>{level?.name || 'Nombre'}</h1>
        </div>
        <div className='Level__header--details'>
          <p>{level?.description || 'Descripcion'}</p>
        </div>
        <div className='Level__header--actions'>
          <button type='button' className={`btn-${level?.color || 'blue'} ${active ? 'btn-sm' : 'btn-xl'}`} onClick={() => setActive(!active)}>
            <i className='fas fa-plus-circle' />
            {' '}
            {user.type === 'manager' ? 'Liberar' : 'Inscribete'}
          </button>
        </div>
      </div>

      <div className='Level__body column-2'>
        <div className='Level__body--courses'>
          <div className='courses--basic border-thin border-bottom'>
            <div className='basic--title'>
              <span className={`levels--icon grid center v-center background-${level?.color || 'blue'}`}>
                <i className='fas fa-chalkboard' />
              </span>
              <p className='v-center'>Cursos</p>
            </div>
            {level?.courses?.map((course) => (
              <Link to={`/course/${course}`} key={course} className='btn-link v-center left'>
                <span className='course--icon'>
                  <i className='fas fa-book' />
                </span>
                {getCourse(course) || 'aqui deberia ir el nombre'}
              </Link>
            ))}
          </div>

          {/* <div className='courses--intermediate border-thin border-bottom'>
            <div className='intermediate--title'>
              <span className='levels--icon grid center v-center'>
                <i className='fas fa-chalkboard' />
              </span>
              <p className='v-center'>Cursos Complementarios</p>
            </div>
            {level.courses.intermediate.map((course) => (
              <Link to={`/course/${course.id}`} key={course.id} className='btn-link v-center left'>
                <span className='course--icon'>
                  <i className={course.icon} />
                </span>
                {course.name}
              </Link>
            ))}
          </div>
          <div className='courses--advanced'>
            <div>
              <div className='advanced--title'>
                <span className='levels--icon grid center v-center'>
                  <i className='fas fa-chalkboard' />
                </span>
                <p className='v-center'>Cursos Extras</p>
              </div>
              {level.courses.advance.map((course) => (
                <Link to={`/course/${course.id}`} key={course.id} className='btn-link v-center left'>
                  <span className='course--icon'>
                    <i className={course.icon} />
                  </span>
                  {course.name}
                </Link>
              ))}
            </div>
          </div> */}
        </div>

        <div className='Level__body--details'>
          <div>
            <h3 className='v-center'>Requisitos</h3>
            <p>{level?.requirements}</p>
          </div>
          <div>
            <h3 className='v-center'>¿Que aprenderas?</h3>
            <p>{level?.objectives}</p>
          </div>
          <div>
            <h3 className='v-center'>Al finalizar el nivel obtendras</h3>
            <p>{level?.profits}</p>
          </div>
          <div className='details--button'>
            <button type='button' className={`btn-${level?.color || 'blue'} btn-xl`}>
              <i className='fas fa-plus-circle' />
              {' '}
              {user.type === 'manager' ? 'Liberar' : 'Inscribete'}
            </button>
          </div>
        </div>
      </div>

      <div className='Level__footer background-gray-500'>
        <h3 className={`Level__footer--title center text-${level?.color || 'blue'}`}>Jefes finales</h3>
        <div className='column-3 column-gap-md'>
          {teachers.map((teacher) => (
            <React.Fragment key={teacher.id}>
              <ProfileCard1 name={teacher.name} details={teacher.title} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

// const mapDispatchToProps = {
//   getData,
// };

const mapStateToProps = (state) => {
  return {
    user: state.user,
    institute: state.institute,
  };
};

Level.propTypes = {
  user: PropTypes.object,
  institute: PropTypes.object,
};

export default connect(mapStateToProps, null)(Level);
// export default Level;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// Components
import FaqAccordion from '../components/accordions/Accordion';
import ProfileCard7 from '../components/cards/ProfileCard7';
import LevelCard2 from '../components/cards/LevelCard2';
import Newsletter from '../components/cards/Newsletter';
// Images
import Logo from '../../assets/images/logo.png';
import Study1 from '../../assets/images/study1.png';
import Study3 from '../../assets/images/study3.png';
import Avatar from '../../assets/images/draw-teacher.png';
import Modal from '../components/Modal';
import Login from './Login';
import Signin from './Signin';

const teachers = [
  {
    id: 1,
    avatar: Avatar,
    name: 'Armando Cruz',
    title: 'Web Developer',
  },
  {
    id: 2,
    avatar: Avatar,
    name: 'Antonio Guzmán',
    title: 'Fullstack Developer',
  },
  {
    id: 3,
    avatar: Avatar,
    name: 'Hector Marquez',
    title: 'Backend Developer',
  },
  {
    id: 4,
    avatar: Avatar,
    name: 'Luis e. Tenorio',
    title: 'Secretaria',
  },
];

const handlerPrev = (page, setPage, setView, list, size) => {
  const _page =
    page === 0 ?
      (list?.length - list?.length) % size :
      page - size < 0 ?
        0 :
        page - size;
  setPage(_page);
  setView(list?.slice(_page, _page + size));
};

const handlerNext = (page, setPage, setView, list, size) => {
  const _page = page + size >= list?.length ? 0 : page + size;
  setPage(_page);
  setView(list?.slice(_page, _page + size));
};

const Card = (props) => {
  const { icon, title } = props;
  return (
    <div className='aboutus-card border-thin center'>
      <i className={icon} />
      <h5>{title}</h5>
      <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
    </div>
  );
};

const School = (props) => {
  const { institute } = props;
  const [page, setPage] = useState(0);
  const [viewList, setViewList] = useState(institute?.levels?.slice(page, page + 6));

  const [open, setOpen] = useState(false);
  const [form, setForm] = useState();
  const [teacherPage, setTeachePage] = useState(0);
  const [viewTeacher, setViewTeacher] = useState(
    teachers?.slice(teacherPage, teacherPage + 4),
  );

  const slogan = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, officia. Maxime doloribus impedit id quae unde blanditiis similique iure ipsam, corporis nihil! Doloremque ipsum hic esse dignissimos, vel eligendi. Accusantium.';

  return (
    <div className='School'>
      <div className='School__header column-2'>
        <div className='School__header--logo'>
          <img className='image-contain' src={Logo} alt='School Logo' />
        </div>
        <nav className='School__header--nav column-7 v-center'>
          <button
            type='button'
            className='btn-link-white'
            onClick={() => window.scrollTo(0, 0)}
          >
            Inicio
          </button>
          <button
            type='button'
            className='btn-link-white'
            onClick={() => window.scrollTo(0, 900)}
          >
            Conocenos
          </button>
          <button
            type='button'
            className='btn-link-white'
            onClick={() => window.scrollTo(0, 2900)}
          >
            Niveles
          </button>
          <button
            type='button'
            className='btn-link-white'
            onClick={() => window.scrollTo(0, 4400)}
          >
            FAQ
          </button>
          <button
            type='button'
            className='btn-link-white'
            onClick={() => window.scrollTo(0, 5300)}
          >
            Contacto
          </button>
          <button type='button' className='btn-blue' onClick={() => { setForm(<Signin setForm={setForm} />); setOpen(true); }}>
            Inscribete
          </button>
          <button type='button' className='btn-acent' onClick={() => { setForm(<Login setForm={setForm} />); setOpen(true); }}>
            Iniciar Sesión
          </button>
        </nav>
      </div>

      <div className='School__hero column-2 v-center'>
        <div className='School__hero--slogan row-gap-sm'>
          <h1>{'Educación en linea'.toUpperCase()}</h1>
          <p>
            {institute?.description || 'Deseas conocer la mejor manera de aprender en linea?'}
          </p>
          <button type='button' className='btn-blue left' onClick={() => { setForm(<Signin setForm={setForm} />); setOpen(true); }}>
            Inscribete
          </button>
        </div>
      </div>

      <div id='SchoolAboutUs' className='School__aboutus'>
        <div className='School__aboutus--info column-2'>
          <div className='info--learn center'>
            <h1 className='v-end'>
              Nuestra
              <br />
              Experiencia
            </h1>
            <button type='button' className='btn-outline left v-start'>
              Conocer más
              {' '}
              <i className='fas fa-angle-double-right' />
            </button>
          </div>
          <div className='info--cards column-3'>
            <Card icon='fas fa-chalkboard-teacher' title='Expert Teacher' />
            <Card icon='fas fa-book' title='Big Catalog' />
            <Card icon='fas fa-book-reader' title='Amazing Library' />
            <Card icon='fas fa-running' title='Sports' />
            <Card icon='fas fa-headphones-alt' title='Music Lessons' />
            <Card icon='fas fa-birthday-cake' title='Day celebrations' />
          </div>
        </div>
        <div className='column-2 background-gray text-white'>
          <div className='apply-card background-blue center'>
            <h5>Solicitar la admisión</h5>
            <div className='border-thin' />
            <small>Hazlo más simple</small>
            <button type='button' className='btn-white text-blue'>
              Apply
            </button>
          </div>
          <div className='column-4'>
            <div className='v-center'>
              <h3 className='text-blue'>1000+</h3>
              <span>Estudiantes</span>
            </div>
            <div className='v-center'>
              <h3 className='text-blue'>250+</h3>
              <span>Niveles</span>
            </div>
            <div className='v-center'>
              <h3 className='text-blue'>5+</h3>
              <span>Años de servicios</span>
            </div>
            <div className='v-center'>
              <h3 className='text-blue'>120+</h3>
              <span>Maestros</span>
            </div>
          </div>
        </div>
      </div>

      <div className='School__tour'>
        <div className='School__tour--info column-2'>
          <div className='info--image'>
            <img className='image-contain' src={Study1} alt='' />
          </div>
          <div className='info--details v-center'>
            <h2>Hacer un recorrido</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellendus, alias dolorem officiis accusamus distinctio
              perspiciatis illo explicabo architecto amet magni, dignissimos a
              quo odit ipsum tenetur nulla. Non, excepturi ullam!
            </p>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur</li>
              <li>Repellendus, alias dolorem officiis accusamus</li>
              <li>Non, excepturi ullam!</li>
              <li>Lorem ipsum dolor sit amet consectetur</li>
              <li>Non, excepturi ullam!</li>
            </ul>
          </div>
        </div>
        <div className='School__tour--choose column-2'>
          <div className='choose--items v-center'>
            <h2>Por qué elegirnos</h2>
            <div className='gain--item column-2'>
              <span className='center v-center'>
                <i className='fas fa-graduation-cap' />
              </span>
              <div>
                <h5>Certificate</h5>
                <span>
                  Al completar nuestros niveles o cursos se te brindara un diploma digital
                </span>
              </div>
            </div>
            <div className='gain--item column-2'>
              <span className='center v-center'>
                <i className='fas fa-money-check-alt' />
              </span>
              <div>
                <h5>Asequibilidad</h5>
                <span>
                  Ofrecemos un plan de renta exelente para que cualquiera pueda alacanzar sus metas
                </span>
              </div>
            </div>
            <div className='gain--item column-2'>
              <span className='center v-center'>
                <i className='fas fa-heart' />
              </span>
              <div>
                <h5>Comunidad</h5>
                <span>
                  Contamos con la mejor comunidad que te ayudara a resolver tus problemas
                </span>
              </div>
            </div>
          </div>
          <div className='choose--image'>
            <img className='image-contain' src={Study3} alt='' />
          </div>
        </div>
      </div>

      <div className='School__levels center'>
        <h2>Nuestros niveles</h2>
        <div className='School__levels--container column-3 center v-center'>
          <i
            role='presentation'
            className='fas fa-angle-double-left levels--prev'
            onClick={() => handlerPrev(page, setPage, setViewList, institute?.levels, 6)}
          />
          <ul className='School__levels--items column-3 row-2'>
            {viewList?.map((level) => (
              <li key={level?._id}>
                <LevelCard2
                  id={level?._id}
                  name={level?.name}
                  description={level?.description || ''}
                  educoins={level?.earnings || 0}
                  courses={level?.courses?.length || 0}
                  color={level?.color || 'primary'}
                />
              </li>
            ))}
          </ul>
          <i
            role='presentation'
            className='fas fa-angle-double-right levels--next'
            onClick={() => handlerNext(page, setPage, setViewList, institute?.levels, 6)}
          />
        </div>
      </div>

      <div className='School__teachers center'>
        <h2>Nuestro equipo</h2>
        <div className='column-3 v-center'>
          <i
            role='presentation'
            className='fas fa-angle-double-left center teachers--prev'
            onClick={() => handlerPrev(
              teacherPage,
              setTeachePage,
              setViewTeacher,
              teachers,
              4,
            )}
          />
          <ul className='School__teachers--team right column-4'>
            {viewTeacher?.map((teacher) => (
              <li key={teacher.id}>
                <ProfileCard7
                  avatar={teacher?.avatar}
                  name={teacher?.name}
                  title={teacher?.title}
                />
              </li>
            ))}
          </ul>
          <i
            role='presentation'
            className='fas fa-angle-double-right center teachers--next'
            onClick={() => handlerNext(
              teacherPage,
              setTeachePage,
              setViewTeacher,
              teachers,
              4,
            )}
          />
        </div>
      </div>

      <div className='School__faq background-gray'>
        <h2 className='text-white'>Preguntas frecuentes</h2>
        <FaqAccordion
          title='Lorem ipsum dolor sit amet consectetur, adipisicing elit.?'
          description='Example Answer'
        />
        <FaqAccordion
          background='white'
          title='Example Question?'
          description='Example Answer'
        />
        <FaqAccordion title='Example Question?' description='Example Answer' />
        <FaqAccordion title='Example Question?' description='Example Answer' />
        <FaqAccordion title='Example Question?' description='Example Answer' />
        <FaqAccordion title='Example Question?' description='Example Answer' />
      </div>

      <div className='School__footer background-gray text-white'>
        <div className='Footer__body'>
          <section className='Footer__aboutUs left'>
            <div className='Footer__aboutUs--image'>
              {/* <img src={Logo} alt='' className='image-contain' /> */}
              <h1>EduLi</h1>
            </div>
            <div className='Footer__aboutUs--slogan'>
              <p>{slogan}</p>
            </div>
            <div className='Footer__aboutUs--socialMedia'>
              <span>Buscanos en nustras redes sociales:</span>
              <div className='socialMedia--icons column-5'>
                {/* <Link to={{ pathname: 'https://www.facebook.com' }} target='_blank' className='btn-link-white icon-facebook'>
                  <i className='fab fa-facebook-f' />
                </Link>
                <Link to={{ pathname: 'https://www.twitter.com' }} target='_blank' className='btn-link-white icon-twitter'>
                  <i className='fab fa-twitter' />
                </Link>
                <Link to={{ pathname: 'https://www.linkedin.com' }} target='_blank' className='btn-link-white btn-xl icon-linkedin'>
                  <i className='fab fa-linkedin-in' />
                </Link>
                <Link to={{ pathname: 'https://www.github.com' }} target='_blank' className='btn-link-white btn-xl icon-github'>
                  <i className='fab fa-github' />
                </Link> */}
                <Link to='/' target='_blank' className='btn-link-white icon-facebook'>
                  <i className='fab fa-facebook-f' />
                </Link>
                <Link to='/' target='_blank' className='btn-link-white icon-twitter'>
                  <i className='fab fa-twitter' />
                </Link>
                <Link to='/' target='_blank' className='btn-link-white btn-xl icon-linkedin'>
                  <i className='fab fa-linkedin-in' />
                </Link>
                <Link to='/' target='_blank' className='btn-link-white btn-xl icon-github'>
                  <i className='fab fa-github' />
                </Link>
              </div>
            </div>
          </section>

          <section className='Footer__links'>
            <nav className='Footer__links--items'>
              <button
                type='button'
                className='btn-link-soft v-center left'
                onClick={() => window.scrollTo(0, 0)}
              >
                Inicio
              </button>
              <button
                type='button'
                className='btn-link-white v-center left'
                onClick={() => window.scrollTo(0, 900)}
              >
                Conocenos
              </button>
              <button
                type='button'
                className='btn-link-white v-center left'
                onClick={() => window.scrollTo(0, 2900)}
              >
                Niveles
              </button>
              <button
                type='button'
                className='btn-link-white v-center left'
                onClick={() => window.scrollTo(0, 4400)}
              >
                FAQ
              </button>
              <button
                type='button'
                className='btn-link-white v-center left'
                onClick={() => window.scrollTo(0, 5300)}
              >
                Contacto
              </button>
            </nav>
          </section>

          <section className='Footer__newsletter'>
            <Newsletter />
          </section>
        </div>
        <section className='Footer__copyright background-gray-darken'>
          <nav className='column-2 center'>
            <Link to='/' className='btn-link-white'>
              Terminos y condiciones
            </Link>
            <Link to='/' className='btn-link-white'>
              Privacidad
            </Link>
          </nav>
        </section>
      </div>
      <Modal isOpen={open} onClose={() => setOpen(!open)}>{form}</Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    institute: state.institute,
  };
};

School.propTypes = {
  institute: PropTypes.object,
};

export default connect(mapStateToProps, null)(School);

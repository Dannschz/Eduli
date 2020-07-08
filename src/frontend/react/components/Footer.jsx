import React from 'react';
import { Link } from 'react-router-dom';
import Newsletter from './cards/Newsletter';
import Sponsor1 from '../../assets/images/logo.png';

export default function Footer(props) {

  const { isLogged } = props;

  return (
    <footer className='Footer background-secondary text-white'>
      <div className='Footer__body'>

        <section className='Footer__aboutUs left'>
          <div className='Footer__aboutUs--image v-center'>
            {/* <img src={logo} alt="" className="fit-img" /> */}
            <h1>EduLi</h1>
          </div>
          <div className='Footer__aboutUs--slogan'>
            <p>La nueva manera de aprender en linea</p>
          </div>
          <div className='Footer__aboutUs--socialMedia'>
            <span>Buscanos en nustras redes sociales:</span>
            <div className='socialMedia--icons column-5'>
              <Link to='/' className='btn-link-white'><i className='fab fa-facebook-f' /></Link>
              <Link to='/' className='btn-link-white'><i className='fab fa-instagram' /></Link>
              <Link to='/' className='btn-link-white'><i className='fab fa-github' /></Link>
              <Link to='/' className='btn-link-white'><i className='fab fa-twitter' /></Link>
              <Link to='/' className='btn-link-white'><i className='fab fa-google' /></Link>
            </div>
          </div>
        </section>

        { isLogged ? (
          <section className='Footer__links'>
            <nav className='Footer__links--items'>
              <Link to='/' className='btn-link-white v-center left'>Inicio</Link>
              <Link to='/' className='btn-link-white v-center left'>Cursos</Link>
              <Link to='/' className='btn-link-white v-center left'>Contacto</Link>
            </nav>
          </section>
        ) :
          (
            <section className='Footer__links'>
              <nav className='Footer__links--items'>
                <Link to='/' className='btn-link-white v-center left'>Iniciar Sesión</Link>
                <Link to='/' className='btn-link-white v-center left'>Registrate</Link>
              </nav>
            </section>
          ) }

        <section className='Footer__newsletter'>
          <Newsletter />
        </section>

        <section className='Footer__sponsor'>
          <span className='v-end'>Patrocinadores oficiales en:</span>
          <div className='column-3'>
            <img src={Sponsor1} alt='' className='image-contain' />
            <img src={Sponsor1} alt='' className='image-contain' />
            <span className='center v-center'>
              Y muchos más
              <i className='fas fa-plus' />
            </span>
          </div>
        </section>
      </div>
      <section className='Footer__copyright background-secondary-darken'>
        <nav className='column-5 center'>
          <Link to='/' className='btn-link-white'>Preguntas frecuentes</Link>
          <Link to='/' className='btn-link-white'>Contacto</Link>
          <Link to='/' className='btn-link-white'>Terminos y condiciones</Link>
          <Link to='/' className='btn-link-white'>Privacidad</Link>
          <Link to='/' className='btn-link-white'>Agradecimientos</Link>
        </nav>
      </section>
    </footer>
  );
}

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logoutRequest } from '../actions';
import Logo from '../../assets/images/logo.png';
import Avatar from '../../assets/images/not-found1.png';

const AppBar = (props) => {
  const { user, isLogged, bloke } = props;

  const handleLogout = () => {
    document.cookie = 'id=';
    document.cookie = 'token=';
    document.cookie = 'name=';
    document.cookie = 'email=';
    document.cookie = 'type=';
    props.logoutRequest({});
    window.location.href = '/';
  };

  if (isLogged && bloke) {
    return (
      <header className='appbar background-secondary'>
        <div className='appbar__logo'>
          <img
            className='appbar__logo--image image-contain'
            src={Logo}
            alt='School-Logo'
          />
        </div>
        <nav className='appbar__navigation column-2 right v-center'>
          <div />
          {bloke && (
            <Link to={`/${bloke}`} className='appbar__navigation--item btn-link-white'>
              {bloke === 'student' && 'Mis Cursos'}
              {bloke === 'teacher' && 'Tablero'}
              {bloke === 'manager' && 'Tablero'}
              {bloke === '' && 'Inicio'}
            </Link>
          )}
        </nav>
        {bloke && (
          <div className='appbar__user v-center column-5'>
            <div className='appbar__user--notificatios right column-2 v-center'>
              <i className='fas fa-bell text-white' />
              <button type='button' className='btn-blue btn-sm'>
                Messages
                {' '}
                <span className='badge-gray-600 badge-xs text-black'>0</span>
              </button>
            </div>
            <div className='appbar__user--image center'>
              <img
                className='image--avatar image-cover'
                src={Avatar}
                alt='User-Avatar'
              />
            </div>
            <div className='appbar__user--settings text-white left v-center'>
              <p className='settings--name v-center'>{user.name || 'User'}</p>
              <div className='settings--menu left'>
                <i className='fas fa-chevron-down' />
              </div>
              <div className='settings--leave collapse'>
                <button type='button' className='btn-link' onClick={handleLogout}>
                  Cerrar Session
                  <i className='fas fa-sign-out-alt' />
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    );
  }
  return (
    <header className='appbar background-secondary'>
      <div className='appbar__logo'>
        <img
          className='appbar__logo--image fit-img'
          src={Logo}
          alt='School-Logo'
        />
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

AppBar.propTypes = {
  user: PropTypes.object,
  logoutRequest: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppBar);


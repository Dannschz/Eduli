import React from 'react';
import { Link } from 'react-router-dom';
// import Logo from 'assets/images/eduli.png';
import { useStateValue } from '../../../Context';
import './toolbar.scss';

const Logo = require('../../../static/assets/images/logo.png');

const Toolbar = () => {
  const { theme, dispatch } = useStateValue();
  return (
    <header className={`Toolbar ${theme}`}>
      <nav className='Toolbar__nav'>
        <Link to='/manager'><img className='Toolbar--logo' src={Logo} alt='Logotipo' /></Link>
      </nav>
      <div className='Toolbar__actions'>
        <button
          type='button'
          className='btn-link-soft'
          onClick={() => dispatch({ type: 'SET_THEME', theme: 'light' })}
        >
          light
        </button>
        <div className='divider' />
        <button
          type='button'
          className='btn-link-soft'
          onClick={() => dispatch({ type: 'SET_THEME', theme: 'dark' })}
        >
          dark
        </button>
        <Link to='/manager/settings' className='btn-link-soft'>
          settings
          <i className='fas fa-angle-down' />
        </Link>
      </div>
    </header>
  );
};

export default Toolbar;

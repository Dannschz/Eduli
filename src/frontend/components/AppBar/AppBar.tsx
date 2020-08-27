import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../Context';
import './appBar.scss';

const Logo = require('../../static/assets/images/logo.png');

const AppBar = () => {
  const [{ theme }, dispatch] = useStateValue();
  const [actionsActive, setActionsActive] = useState(false);
  const newTheme = theme === 'light' ? 'dark' : 'light';
  return (
    <header className={`AppBar ${theme}`}>
      <figure className='AppBar__logo'>
        <img src={Logo} alt='Logo Eduli' />
      </figure>
      <nav className={`AppBar__nav ${theme}`}>
        <Link to='/' className='AppBar__nav--home'>
          <i className='fas fa-home' />
          <span>Inicio</span>
        </Link>
        <Link to='/'>
          <i className='fas fa-book' />
          <span>Escuelas</span>
        </Link>
        <Link to='/'>
          <i className='fas fa-layer-group' />
          <span>Catalogo</span>
        </Link>
        <Link to='/' className='AppBar__nav--search'>
          <i className='fas fa-search' />
          <span>Buscar</span>
        </Link>
      </nav>
      <nav className={`AppBar__actions ${theme}`}>
        <button type='button' className='btn-link' onClick={() => setActionsActive(!actionsActive)}>
          <i className={`fas fa-${actionsActive ? 'times' : 'bars'}`} />
          {/* <i className='fas fa-user' /> */}
        </button>
        <div className={`AppBar__actions--links ${theme} ${actionsActive}`}>
          <Link to='/login' className='btn' onClick={() => setActionsActive(false)}>
            Registrate
          </Link>
          <Link to='/login' className='btn-acent' onClick={() => setActionsActive(false)}>
            Iniciar Sesión
          </Link>
          <div className={`SelectTheme ${actionsActive}`}>
            <h6>Theme</h6>
            <button type='button' className={`ToggleSwitch ${theme} ${actionsActive}`} onClick={() => dispatch({ type: 'SET_THEME', theme: newTheme })}>
              <span className={`ToggleSwitch--circle ${theme}`} />
            </button>
          </div>
        </div>
      </nav>
      <button type='button' className={`ToggleSwitch ${theme}`} onClick={() => dispatch({ type: 'SET_THEME', theme: newTheme })}>
        <span className={`ToggleSwitch--circle ${theme}`} />
      </button>
    </header>
  );
};

export default AppBar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../../Context';
import './sidenav.scss';

const Sidenav = () => {
  const { theme } = useStateValue();
  const [active, setActive] = useState(false);
  return (
    <section className={`Sidenav ${theme} ${active}`}>
      <button type='button' className='Sidenav--active btn-link-soft' onClick={() => setActive(!active)}>
        <i className={`fas fa-${active ? 'angle-left' : 'bars'}`} />
      </button>
      <div className='Sidenav__body'>
        <Link to='/' className='css-typing'>
          <i className='fas fa-book' />
          {active && (
            <p>Element</p>
          )}
        </Link>
        <Link to='/'>
          <i className='fas fa-book' />
          {active && (<p>Element</p>)}
        </Link>
        <Link to='/'>
          <i className='fas fa-book' />
          {active && (<p>Element</p>)}
        </Link>
        <Link to='/'>
          <i className='fas fa-book' />
          {active && (<p>Element</p>)}
        </Link>
        <i className='fas fa-angle-down' />
      </div>
    </section>
  );
};

export default Sidenav;

import React from 'react';
// import { Link, NavLink } from 'react-router-dom';
import { useStateValue } from '../../../Context';
import './bottomNavigationBar.scss';

type navigationProps = {
  page: number,
  setPage: Function
}

const BottomNavigationBar = ({ page, setPage }: navigationProps) => {
  const { theme } = useStateValue();
  return (
    <section className={`BottomNavigationBar ${theme}`}>
      <button
        type='button'
        className={`btn-link ${page === 1 ? 'active' : ''}`}
        onClick={() => setPage(1)}
      >
        <i className='fas fa-home' />
        Home
      </button>
      <button
        type='button'
        className={`btn-link ${page === 2 ? 'active' : ''}`}
        onClick={() => setPage(2)}
      >
        <i className='fas fa-graduation-cap' />
        Areas
      </button>
      <button
        type='button'
        className={`btn-link ${page === 3 ? 'active' : ''}`}
        onClick={() => setPage(3)}
      >
        <i className='fas fa-layer-group' />
        Levels
      </button>
      <button
        type='button'
        className={`btn-link ${page === 4 ? 'active' : ''}`}
        onClick={() => setPage(4)}
      >
        <i className='fas fa-sign-in-alt' />
        Enter
      </button>
    </section>
    // <nav className={`BottomNavigationBar ${theme}`}>
    //   <NavLink activeClassName='link-active' to='/institute'>
    //     <i className='fas fa-home' />
    //     Home
    //   </NavLink>
    //   <NavLink activeClassName='link-active' to='/institute/areas'>
    //     <i className='fas fa-graduation-cap' />
    //     Areas
    //   </NavLink>
    //   <Link to='/institute/levels'>
    //     <i className='fas fa-layer-group' />
    //     Levels
    //   </Link>
    //   <Link to='/institute/login'>
    //     <i className='fas fa-sign-in-alt' />
    //     User
    //   </Link>
    // </nav>
  );
};

export default BottomNavigationBar;

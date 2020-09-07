import React from 'react';
import { Link } from 'react-router-dom';
import './managerCard.scss';

const ManagerCard = () => {
  return (
    <section className='ManagerCard'>
      <div className='ManagerCard__header'>
        <figure className='ManagerCard__header--avatar'>
          <img src='' alt='user-avatar' />
        </figure>
        <button type='button' className='btn'>
          <i className='fas fa-sign-out-alt' />
          Sign Out
        </button>
      </div>
      <div className='ManagerCard__body'>
        <nav className='ManagerCard__body--nav'>
          <Link to='/' className='btn-link'>
            Overview
            <i className='fas fa-angle-right' />
          </Link>
          <Link to='/' className='btn-link'>
            Settings
            <i className='fas fa-angle-right' />
          </Link>
          <Link to='/' className='btn-link'>
            My Items
            <i className='fas fa-angle-right' />
          </Link>
          <Link to='/' className='btn-link'>
            Security
            <i className='fas fa-angle-right' />
          </Link>
          <Link to='/' className='btn-link'>
            Billing
            <i className='fas fa-angle-right' />
          </Link>
          <Link to='/' className='btn-link'>
            Messages
            <i className='fas fa-angle-right' />
          </Link>
        </nav>
      </div>
    </section>
  );
};

export default ManagerCard;

import React from 'react';

export default function AppBar(props) {

  const { logo, avatar, messages, user } = props;

  return (
    <section className='appbar background-secondary column--2 row--2'>
      <div className='appbar__logo column--2'>
        <img className='appbar__logo--image' src={logo} alt='School-Logo' />
        <span className='appbar__logo--title'>Inicio</span>
      </div>
      <div className='user--section v-center column--4'>
        <div className='user--notificatios center'>
          <button type='button' className='btn btn-primary'>
            Messages
            {' '}
            <span className='badge badge-acent'>
              {messages}
            </span>
          </button>
        </div>
        <div className='user--img center'>
          <img className='user--avatar' src={avatar} alt='User-Avatar' />
        </div>
        <div className='user--settings v-center'>
          <p className='user--name center text--primary'>{user}</p>
          <div className='user--settings--menu text--primary'>
            <i className='fas fa-chevron-down' />
          </div>
        </div>
      </div>
    </section>
  );
}

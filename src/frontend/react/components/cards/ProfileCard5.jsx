import React from 'react';
import { Link } from 'react-router-dom';

export default function ProfileCard5(props) {
  const { avatar, name } = props;
  return (
    <div className='profile-card background-white border-thin border-radius-xl'>
      <img src={avatar} className='profile-img-box center' alt='profileImage' />

      <div className='profile-body center'>
        <h2 className='profile-title'>{name}</h2>
        <div className='profile-socialmedia column-4 space'>
          <Link to='/' target='_blank' className='btn-link-facebook icon-facebook'>
            <i className='fab fa-facebook-f' />
          </Link>
          <Link to='/' target='_blank' className='btn-link-facebook icon-twitter'>
            <i className='fab fa-twitter' />
          </Link>
          <Link to='/' target='_blank' className='btn-link-facebook icon-slack'>
            <i className='fab fa-slack-hash' />
          </Link>
          <Link to='/' target='_blank' className='btn-link-facebook icon-dribbble'>
            <i className='fab fa-dribbble' />
          </Link>
        </div>
      </div>

      <div className='profile-footer'>
        <Link to='/' className='btn btn-secondary text-white'>
          <span className='far fa-envelope' />
          {' '}
          Send a Message
        </Link>
      </div>
    </div>
  );
}

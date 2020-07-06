import React from 'react';

export default function profileCard1(props) {
  const { image, name, course, description } = props;
  return (
    <div className='profile-card card-sm'>
      <img src={image} className='profile-img-aback' alt='PofileImage' />

      <div className='profile-body-atop background-white border-thin center'>
        <h4 className='profile-title'>{name}</h4>

        <span className='profile-ubication text--info'>
          <i className='fas fa-book' />
          {' '}
          {course}
        </span>

        <p className='profile-description text-center'>
          {description}
        </p>

        <div className='profile-action btn-group'>
          <button type='button' className='btn btn-primary btn-icon'>
            <span className='contact'>
              <i className='far fa-user' />
            </span>
            {' '}
            Info
          </button>
          <button type='button' className='btn btn-secondary'>
            <i className='far fa-envelope' />
          </button>
        </div>
      </div>
    </div>
  );
}

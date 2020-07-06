import React from 'react';
import { Link } from 'react-router-dom';

export default function ProfileCard7(props) {

  const { avatar, title, name } = props;

  return (
    <div className='profile-card background--white border-thin border-radius-xl'>
      <img src={avatar} className='image-contain profile-img-box center' alt='profileImage' />

      <div className='profile-body center'>
        <h2 className='profile-title'>{name}</h2>

        <span className='profile-subtitle text-gray font-weight-normal'>{title}</span>

        <div className='profile-socialmedia column-4 column-gap-xs'>
          {/* <Link to={{ pathname: 'https://www.facebook.com' }} target='_blank' className='btn-link-facebook icon-facebook'>
            <i className='fab fa-facebook-f' />
          </Link>
          <Link to={{ pathname: 'https://www.twitter.com' }} target='_blank' className='btn-link-twitter icon-twitter'>
            <i className='fab fa-twitter' />
          </Link>
          <Link to={{ pathname: 'https://www.linkedin.com' }} target='_blank' className='btn-link-linkedin icon-linkedin'>
            <i className='fab fa-linkedin-in' />
          </Link>
          <Link to={{ pathname: 'https://www.github.com' }} target='_blank' className='btn-link-github icon-github'>
            <i className='fab fa-github' />
          </Link> */}
          <Link to='/' target='_blank' className='btn-link-facebook icon-facebook'>
            <i className='fab fa-facebook-f' />
          </Link>
          <Link to='/' target='_blank' className='btn-link-twitter icon-twitter'>
            <i className='fab fa-twitter' />
          </Link>
          <Link to='/' target='_blank' className='btn-link-linkedin icon-linkedin'>
            <i className='fab fa-linkedin-in' />
          </Link>
          <Link to='/' target='_blank' className='btn-link-github icon-github'>
            <i className='fab fa-github' />
          </Link>
        </div>
      </div>
    </div>
  );
}

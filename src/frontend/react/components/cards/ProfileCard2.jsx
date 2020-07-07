import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../../assets/images/draw-teacher.png';

export default function ProfileCard2(props) {
  const { name, courses, approved, failed } = props;
  return (
    <div className='profile-card background-white column-2 border-thin'>
      <div className='profile-image'>
        {/* <Link to='/teacher/12345'> */}
        <img className='image-cover profile-img-box' src={Avatar} alt='' />
        {/* </Link> */}
      </div>
      <div className='profile-body space-bottom'>
        <h3 className='profile-title v-end'>{name}</h3>
        <p className='profile-title v-end'>{`${courses} cursos`}</p>
        <span className='profile-title v-end'>{`${approved} aprovados ${failed} rechazados`}</span>
        <div className='profile-socialmedia column-8 space'>
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

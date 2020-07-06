import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../../assets/images/draw-teacher.png';

export default function BlogCard3(props) {

  const { id, title, details, avatar, teacher, completed } = props;
  return (
    <div className='card-white border-thin row-gap-md'>
      <div className='card-header column-2 row-gap-sm'>
        <Link to='/' className='card-header-user'>
          <img className='card-header-avatar' src={avatar || Avatar} alt='teacher-avatar' />
          <span className='v-center'>{teacher}</span>
        </Link>
        <span className={`right v-center ${completed >= 100 ? 'text-success' : 'text-gray-500'}`}>
          {completed}
          % completado
        </span>
      </div>

      <div className='card-body center row-gap-sm'>
        <h3 className='card-title-center'>{title}</h3>
        <p className='card-text'>{details.description}</p>
        <div className='card-body-info column-2 column-gap-md text-gray-600'>
          <span className='center'>
            {details.videos}
            {' '}
            videos
          </span>
          <span className='center'>
            {details.files}
            {' '}
            archivos
          </span>
        </div>
        <Link to={`/course/${id}`} className='btn-primary btn-100'>Ver curso</Link>
      </div>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import Draw from '../../../assets/images/draw-video.png';

export default function BlogCard1(props) {

  const { id, image, title, description, course } = props;
  return (
    <div className='card'>
      <img src={image || Draw} className='card-img-top' alt='CardImage' />
      <div className='card-body background-white border-thin row-gap-sm'>
        <span className='text-gray-600'>
          <i className='fas fa-book' />
          {' '}
          {course}
        </span>
        <h3 className='card-title'>{title}</h3>
        <p className='card-text'>{description}</p>
        <div className='column-2 v-center'>
          <Link to={`/player/${id}`} className='btn-primary left'>Continuar</Link>
          <span className='text-danger right'>
            Actividad
            {' '}
            <i className='fas fa-file-alt' />
          </span>
        </div>
      </div>
    </div>
  );
}

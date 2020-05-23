import React from 'react';
import { Link } from 'react-router-dom';

export default function BlogCard1(props) {
  const { image, title, description } = props;

  return (
    <div className='card'>
      <img src={image} className='card-img-top' alt='CardImage' />
      <div className='card-body background-white border-thin'>
        <span className=''>
          <i className='fas fa-medal' />
          {' '}
          Awards
        </span>
        <h3 className='card-title'>{title}</h3>
        <p className='card-text'>{description}</p>
        <Link to='/' className='btn btn-secondary left'>
          Read More
        </Link>
      </div>
    </div>
  );
}

/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LevelCard2(props) {
  const { id, name, description, educoins, courses, color } = props;
  const [hover, setHover] = useState(false);
  return (
    <div role='presentation' className='LevelCard2 border-thin' onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div className={`LevelCard2__header background-${color} text-gray-400`}>
        <span className='center'><i className='fas fa-graduation-cap' /></span>
      </div>

      <div className={`LevelCard2__body ${hover ? `background-${color} text-white` : ''}`}>
        <h3 className='LevelCard2__body--title'>{name}</h3>
        <span className='LevelCard2__body--description'>
          {' '}
          {description}
        </span>
        <div className='column-3 v-center'>
          <span>
            <i className='fas fa-coins' />
            {' '}
            {educoins}
          </span>
          <span>
            <i className='fas fa-users' />
            {courses}
          </span>
          <Link to={`/level/${id}`} className={`${hover ? 'btn-white' : `btn-outline-${color}`}`}>See</Link>
        </div>
      </div>
    </div>
  );
}

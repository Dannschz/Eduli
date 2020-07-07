import React from 'react';
import { Link } from 'react-router-dom';

export default function LevelCard(props) {

  const { id, iconColor, iconBackground, level } = props;

  return (
    <div className='LevelCard border-thin border-radius-sm'>
      <div className={`LevelCard__header background-${iconBackground} text-${iconColor} left`}>
        <i className='fas fa-graduation-cap' />
      </div>
      <div className='LevelCard__body v-end'>
        <h3>{level}</h3>
        <span>Cursos: 13</span>
        <span />
      </div>
      <div className='LevelCard__footer column-3'>
        <Link to={`/level/${id}`} className='btn btn-light btn-sm'>Ver</Link>
        <Link to='/edit/level' className='btn btn-light btn-sm'>Editar</Link>
        <button type='button' className='btn btn-acent btn-sm'>Liberar</button>
      </div>
    </div>
  );
}

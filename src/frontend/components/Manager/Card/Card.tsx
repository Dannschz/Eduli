import React from 'react';
import { useStateValue } from '../../../Context';
import './card.scss';

const Card = () => {
  const { theme } = useStateValue();
  return (
    <div className={`Card ${theme}`}>
      <div className='Card__header'>
        <span><i className='fas fa-user-graduate' /></span>
        <h5>Title</h5>
      </div>
      <div className='Card__body'>
        <p className={`text-${theme === 'light' ? 'primary' : 'soft'}`}>
          <span>Activos:</span>
          <span>10</span>
        </p>
        <p className='text-success'>
          <span>Aceptados:</span>
          <span>15</span>
        </p>
        <p className='text-danger'>
          <span>Rechazados:</span>
          <span>2</span>
        </p>
        <p className='text-acent'>
          <span>En proceso:</span>
          <span>5</span>
        </p>
      </div>
      <div className='Card__footer'>
        <button type='button' className='btn'>Ver todos</button>
        <button type='button' className='btn'>Más detalles</button>
      </div>
    </div>
  );
};

export default Card;

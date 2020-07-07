import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../assets/images/logo.png';

export default function BecomeInTeam(props) {
  return (
    <div className='becomeinteam background-white border-thin column-2'>
      <div className='becomeinteam-body'>
        <h2 className='becomeinteam-body-title'>Escuala Patito</h2>
        <p className='becomeinteam-body-message'>
          Do you want to join our team and
          {' '}
          <br />
          {' '}
          work remotely from anywhere you&apos;d
          <br />
          {' '}
          like? We can’t wait to hear from you!
        </p>
        <Link to='/' className='btn btn-secondary'>
          <span className='becomeinteam-body-icon'>
            <i className='fas fa-file-invoice' />
          </span>
          {' '}
          Visitar
        </Link>
      </div>
      <div className='becomeinteam-body-image'>
        <img src={Image} alt='' />
      </div>
    </div>
  );
}

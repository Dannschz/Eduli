import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../assets/images/not-found2.png';

export default function NotFound(props) {
  return (
    <section className='NotFound'>
      <img className='image-contain' src={Image} alt='Not found' />
      <Link to='/' className='btn-secondary'>
        Ir al Inicio
      </Link>
    </section>
  );
}

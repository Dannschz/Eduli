import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../assets/images/not-found2.png';

export default function NotFound(props) {
  return (
    <section className='NotFound'>
      <img className='grid center v-center image-contai' src={Image} alt='Not found' />
      <Link to='/' className='btn-secondary'>
        Ir al Inicio
      </Link>
    </section>
  );
}

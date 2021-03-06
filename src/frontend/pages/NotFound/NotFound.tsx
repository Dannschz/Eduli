import React from 'react';
import { Link } from 'react-router-dom';

const Image = require('../../static/assets/images/not-found2.png');

export default function NotFound() {
  return (
    <section className='NotFound'>
      <img className='grid center v-center image-contai' src={Image} alt='Not found' />
      <Link to='/' className='btn-secondary'>
        Ir al Inicio
      </Link>
    </section>
  );
}

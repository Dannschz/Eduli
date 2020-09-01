import React from 'react';
import './hero.scss';

const Hero = () => {
  return (
    <section className='Hero'>
      <div className='Hero__body'>
        <h1>La nueva manera de aprender en linea</h1>
        <h2>Conoce todo lo que te ofrece la nueva educacion en linea:</h2>
        <button type='button' className='btn'>Conocer más</button>
      </div>
    </section>
  );
};

export default Hero;

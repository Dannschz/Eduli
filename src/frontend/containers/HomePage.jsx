import React from 'react';
import BlogCard1 from '../components/BlogCard1';
import Image from '../assets/static/card3.jpg';
import '../assets/sass/pages/HomePage.scss';

export default function HomePage(props) {
  return (
    <section className='HomePage'>
      <BlogCard1
        image={Image}
        title='Ejemplo'
        description='Ejemplo de como crear y consumir un componente'
      />
    </section>
  );
}

import React from 'react';
import BlogCard1 from '../components/BlogCard1';
import Image from '../../assets/images/card3.jpg';

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
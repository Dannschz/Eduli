import React from 'react';

export default function Newsletter(props) {
  return (
    <div className='newsletter'>
      <div className='newsletter-header v-center'>
        <h2 className=''>
          Enterate de las novedades.
        </h2>
      </div>

      <div className='newsletter-body v-start'>
        <p className='newsletter-body-title'>
          Dejanos tu correo y para recibir las actualizaciones y mejores ofertas
        </p>
        <form className='form-group'>
          <input
            className='form-control border--lighten'
            placeholder='Your email address'
            type='email'
          />
          <button type='submit' className='btn btn-tertiary'>
            Suscribete
          </button>
        </form>
      </div>
    </div>
  );
}

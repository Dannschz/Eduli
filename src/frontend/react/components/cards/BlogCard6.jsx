import React, { useState } from 'react';
import AddMaterial from '../forms/AddMaterial';
import Modal from '../Modal';
import Image from '../../../assets/images/draw-video.png';

export default function BlogCard6(props) {

  const { image, course, title, description, approved, color } = props;
  const [open, setOpen] = useState(false);

  return (
    <div className='card card-big background-white border-thin'>

      <div className='card-header column-3 v-center'>
        <div className='card-header-title'>
          <span className={`card-header-icon background-${color}`}><i className='fas fa-graduation-cap' /></span>
          {' '}
          <span>{course}</span>
        </div>
        <span className={`card-header-posted right text-${approved ? 'success' : 'danger'}`}>{approved ? 'Aprobado' : 'Sin aprobar'}</span>
        <span className='btn-link right'><i className='fas fa-ellipsis-h' /></span>
      </div>

      <img src={image || Image} className='card-img-box image-contain center' alt='CardImage' />

      <div className='card-body row-gap-sm'>
        <div className='column-2 v-center'>
          <h3 className='card-title'>{title}</h3>
        </div>
        <p className='card-text'>{description}</p>

        <div className='column-3 column-gap-md'>
          <div className='column-2 btn-group left-big'>
            <button type='button' className='btn btn-secondary btn-sm single-line'>
              15 Videos
            </button>
            <button type='button' className='btn btn-tertiary btn-sm' onClick={() => setOpen(!open)}>
              <span className=''><i className='fas fa-upload' /></span>
            </button>
          </div>

          <div className='column-2 btn-group left-big'>
            <button type='button' className='btn btn-secondary btn-sm single-line'>
              5 Archivos
            </button>
            <button type='button' className='btn-tertiary btn-sm' onClick={() => setOpen(!open)}>
              <span className=''><i className='fas fa-upload' /></span>
            </button>
          </div>

          {!approved && (
            <button type='button' className='btn-link text-primary'>
              <i className='fas fa-share' />
              {' '}
              Enviar a revisión
            </button>
          )}

          <Modal isOpen={open} onClose={() => setOpen(!open)}><AddMaterial course={title} onClose={() => setOpen(!open)} /></Modal>
        </div>
      </div>
    </div>
  );
}

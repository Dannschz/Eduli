import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PdfPreview from './PdfPreview';

export default function VideoCard(props) {

  const { videoPreview } = props;
  const [collapse, setColapse] = useState(true);

  return (
    <div className='VideoCard column-3'>
      <Link to='/player'>
        <img className='image-cover' src={videoPreview} alt='' />
      </Link>
      <div className='VideoCard__body'>
        <p className='VideoCard__body--title'>Title</p>
        <p className='VideoCard__body--description'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className='VideoCard__body--info column-2 text-gray-600'>
          <span>12:05</span>
          <span>Materia</span>
        </div>
      </div>

      <div className='VideoCard__collapse center v-center text-tertiary'>
        <i role='presentation' className={`fas fa-${collapse ? 'plus' : 'times'}`} onClick={() => setColapse(!collapse)} />
      </div>

      <div className={`VideoCard__accordion ${collapse ? 'unseen' : 'visible'} column-start--1 column-end-3 row-start-2`}>
        <PdfPreview />
      </div>
    </div>
  );
}

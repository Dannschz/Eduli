import React from 'react';
import PdfImage from '../../../assets/images/pdf.png';

export default function PdfPreview(props) {
  return (
    <div className='PdfPreview column-2'>
      <img className='image-contain' src={PdfImage} alt='' />
      <div className='PdfPreview__body'>
        <p className='PdfPreview__body--title'>Sumas</p>
        <div className='PdfPreview__body--info column-2 text-gray-700'>
          <span>2 paginas</span>
          <span>Materia</span>
        </div>
        <div className='PdfPreview__body--footer column-2 text-gray-600'>
          <span>
            Fecha de entrega:
            <br />
            10/05/2020
          </span>
          <span>
            Hora limite:
            <br />
            12:00
          </span>
        </div>
      </div>
    </div>
  );
}

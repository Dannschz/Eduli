import React from 'react';
import { useStateValue } from '../../Context';
import './teacherCard.scss';

const Info = require('../../static/assets/images/informacion.svg');

export default function TeacherCard({
  name,
  nivel,
  avatar,
}: {
  name: string;
  nivel: string;
  avatar: string;
}) {
  const { theme } = useStateValue();

  return (
    <div className={`teacherCard ${theme}`}>
      <div className='avatar'>
        <img className='avatarIMG' src={avatar} alt={`${name} Teacher`} />
      </div>
      <div className=''>
        <h5>{name}</h5>
      </div>
      <div className=''>
        <p className={`text-${theme === 'light' ? 'primary' : 'soft'}`}>
          {`Nivel ${nivel}`}
        </p>
      </div>
      <div className='infoSVG'>
        <button type='button' className='infobtn'>
          <img src={Info} alt='infoIcon' />
        </button>
      </div>
    </div>
  );
}

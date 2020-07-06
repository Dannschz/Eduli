import React from 'react';
import Avatar from '../../../assets/images/draw-teacher.png';

export default function ProfileCard1(props) {
  const { avatar, name, details } = props;
  return (
    <div className='profile-card background-gray-400 column-2'>
      <div className='profile-image'>
        <img className='profile-img-box' src={avatar || Avatar} alt='' />
      </div>
      <div className='profile-body'>
        <h3 className='profile-title v-end'>{name}</h3>
        <p>{details}</p>
      </div>
    </div>
  );
}

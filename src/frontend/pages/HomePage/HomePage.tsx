import React from 'react';
import { useStateValue } from '../../Context';
import './homePage.scss';

export default function HomePage() {
  const { theme } = useStateValue();

  return (
    <>
      <div className={`Ejemplo ${theme}`}>
        <h1 className={theme}>{`HomePage ${theme}`}</h1>
        <p>Texto de ejemplo</p>
      </div>
    </>
  );
}

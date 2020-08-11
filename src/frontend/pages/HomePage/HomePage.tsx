import React from 'react';
import { useStateValue } from '../../Context';
import './homePage.scss';

export default function HomePage() {
  const [{ theme }, dispatch] = useStateValue();
  const newTheme = theme === 'light' ? 'dark' : 'light';

  return (
    <>
      <div className={theme}>
        <h1 className={theme}>{`HomePage ${theme}`}</h1>
      </div>
      <button type='button' onClick={() => dispatch({ type: 'SET_THEME', theme: newTheme })}>Boton</button>
    </>
  );
}

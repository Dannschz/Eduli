import React from 'react';
import { useStateValue } from '../../Context';
import useLocaleStorage from '../../hooks/useLocaleStorage';
import './homePage.scss';

export default function HomePage() {
  if (typeof window !== 'undefined') {
    const [{ theme }, dispatch] = useStateValue();
    const [themeStore] = useLocaleStorage('theme', 'light');
    const newTheme = theme === 'light' ? 'dark' : 'light';

    return (
      <>
        <h1 className={themeStore}>{`HomePage ${themeStore}`}</h1>
        <button type='button' onClick={() => dispatch({ type: 'SET_THEME', theme: newTheme })}>Boton</button>
      </>
    );
  }

  return (
    <></>
  );
}

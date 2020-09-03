import React from 'react';
import { useStateValue } from '../../Context';
// import Hero from '../../components/Hero/Hero';
import './homePage.scss';

export default function HomePage() {
  const { theme } = useStateValue();
  // const [{ theme }, dispatch] = useStateValue();
  // const [toggle, setToggle] = useState(theme);
  // const newTheme = theme === 'light' ? 'dark' : 'light';
  // const newToggle = toggle === 'light' ? 'dark' : 'light';

  return (
    <>
      {/* <Hero /> */}
      <div className={`Ejemplo ${theme}`}>
        <h1 className={theme}>{`HomePage ${theme}`}</h1>
        <p>Texto de ejemplo</p>
      </div>
      {/* <div className='draw'>
        <button type='button' className={`ToggleSwitch ${theme}`} onClick={() => dispatch({ type: 'SET_THEME', theme: newTheme })}>
          <small className={`ToggleSwitch__body ${theme}`}>
            <i className={`fas fa-${theme === 'light' ? 'cloud' : 'star'}`} />
            <i className={`fas fa-${theme === 'light' ? 'cloud' : 'star'}`} />
            <i className={`fas fa-${theme === 'light' ? 'cloud' : 'star'}`} />
          </small>
          <div className={`ToggleSwitch--circle ${theme}`} />
        </button>
      </div>
      <button type='button' className='btn' onClick={() => dispatch({ type: 'SET_THEME', theme: newTheme })}>Boton</button> */}
    </>
  );
}

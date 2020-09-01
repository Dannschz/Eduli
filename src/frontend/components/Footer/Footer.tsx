import React from 'react';
import { useStateValue } from '../../Context';
import './footer.scss';

const Footer = () => {
  const [{ theme }] = useStateValue();
  return (
    <footer className={`Footer ${theme}`}>
      <h1>Footer</h1>
    </footer>
  );
};

export default Footer;

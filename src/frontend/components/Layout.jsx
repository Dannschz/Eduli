import React from 'react';
import AppBar from './AppBar';
import '../assets/sass/components/navbars/AppBar.scss';

const Layout = ({ children }) => (
  <>
    <AppBar />
    {children}
    <h1>hola</h1>
  </>
);

export default Layout;

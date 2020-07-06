import React from 'react';
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';

const Layout = ({ isLogged, bloke, children }) => (
  <>
    {isLogged && <AppBar isLogged={isLogged} bloke={bloke} />}
    {children}
    {isLogged && <Footer isLogged={isLogged} />}
  </>
);

export default Layout;

import React, { useState } from 'react';
import Toolbar from '../../components/Institute/Toolbar/Toolbar';
import BottomNavigationBar from '../../components/Institute/BottomNavigationNar/BottomNavigationBar';
import Areas from './Areas';
import Home from './Home';
import Levels from './Levels';
import Enter from './Enter';
import './institute.scss';

const Institute = () => {
  const [page, setPage] = useState(1);
  return (
    <>
      <Toolbar />
      {page === 1 && <Home />}
      {page === 2 && <Areas />}
      {page === 3 && <Levels />}
      {page === 4 && <Enter />}
      <BottomNavigationBar page={page} setPage={setPage} />
    </>
  );
};

export default Institute;

import React from 'react';
import Toolbar from '../../components/Manager/Toolbar/Toolbar';
import Sidenav from '../../components/Manager/Sidenav/Sidenav';
import './manager.scss';
import Card from '../../components/Manager/Card/Card';

const Dashboard = () => {
  return (
    <>
      <Toolbar />
      <Sidenav />
      <main className='Content'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </main>
    </>
  );
};

export default Dashboard;

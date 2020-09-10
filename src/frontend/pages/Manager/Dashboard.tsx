import React from 'react';
import Toolbar from '../../components/Manager/Toolbar/Toolbar';
import Sidenav from '../../components/Manager/Sidenav/Sidenav';
import Card from '../../components/Manager/Card/Card';
import Chart from '../../components/Manager/Chart/Chart';
import './manager.scss';
import BarChart from '../../components/Manager/Chart/BarChart';

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
        <Chart />
        <BarChart />
      </main>
    </>
  );
};

export default Dashboard;

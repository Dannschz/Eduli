import React from 'react';
import { Bar } from 'react-chartjs-2';
import './chart.scss';

const BarChart = () => {
  return (
    <div className='Card'>
      <Bar
        data={{
          labels: ['Lun', 'Mar', 'Mir', 'Jue', 'Vie', 'Sab', 'Dom'],
          datasets: [
            {
              label: 'Primary',
              backgroundColor: '#042454',
              data: [3, 5, 4, 8, 6, 2, 4],
            },
            {
              label: 'Tertiary',
              backgroundColor: '#0056B3',
              data: [4, 3, 5, 4, 8, 7, 5],
            },
            // {
            //   label: 'Green',
            //   backgroundColor: '#5C046C',
            //   data: [7, 2, 6],
            // },
          ],
        }}
        options={{
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
              },
            }],
          },
        }}
      />
    </div>
  );
};

export default BarChart;

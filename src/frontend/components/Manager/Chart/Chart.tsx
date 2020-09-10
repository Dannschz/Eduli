import React from 'react';
import { Pie } from 'react-chartjs-2';
import './chart.scss';

const Chart = () => {
  return (
    <div className='Card'>
      <Pie
        data={{
          labels: ['Primary', 'Secondary', 'Tertiary', 'Accent', 'Danger'],
          datasets: [{
            data: [12, 19, 3, 5, 8],
            backgroundColor: [
              '#042454',
              '#02132d',
              '#0056B3',
              '#5C046C',
              '#8C0404',
            ],
            borderColor: [
              '#f4f7f9',
              '#f4f7f9',
              '#f4f7f9',
              '#f4f7f9',
              '#f4f7f9',
            ],
            borderWidth: 5,
          }],
        }}
      />
    </div>
  );
};

export default Chart;

import React from 'react';
import {Pie, Doughnut} from 'react-chartjs-2';

const state = {
  labels: ['Loss', 'Wins'],
  datasets: [
    {
      label: 'winrate label',
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(165, 247, 184, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(72, 219, 143, 1)'
      ],
      hoverBackgroundColor: [
        'rgba(255, 99, 132, 0.3)',
        'rgba(165, 247, 184, 0.6)',
      ],
      data: [65, 59]
    }
  ]
}

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Doughnut
          data={state}
          options={{
            title:{
              display:true,
              text:'Winrate',
              fontSize:20
            },
            legend:{
              display:true,
              position:'bottom',
              reverse: true
            }
          }}
        />
      </div>
    );
  }
}
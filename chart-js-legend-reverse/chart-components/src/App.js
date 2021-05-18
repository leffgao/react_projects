import React from 'react';
import {Pie, Doughnut} from 'react-chartjs-2';

const state = {
  labels: ['Loss', 'Wins'],
  datasets: [
    {
      label: 'winrate label',
      backgroundColor: [
        '#B21F00',
        '#2FDE00',
      ],
      hoverBackgroundColor: [
      '#501800',
      '#175000',
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
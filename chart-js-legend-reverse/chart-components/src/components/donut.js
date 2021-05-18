import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';

const state = {
  labels: ['January', 'February'],
  datasets: [
    {
      label: 'Rainfall',
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

export default class Donut extends Component {
  render() {
    return (
      <div>
        <Doughnut
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right',
              reverse: true
            }
          }}
        />
      </div>
    );
  }
}
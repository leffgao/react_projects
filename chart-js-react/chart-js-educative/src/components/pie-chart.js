import React, { Component } from 'react';
import { Doughnut} from 'react-chartjs-2';
import "chartjs-plugin-doughnut-innertext";

const state = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350',
      '#35014F'
      ],
      data: [65, 59, 80, 81, 56]
    }
  ]
}
console.log(state)
export default class PieChart extends Component {

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
              position:'right'
            },
            centerText: {
              color: "#000",
              value: state.datasets[0].data[0],
              fontSizeAdjust: 0.2 // increase font size 20% based on default font size
            }
          }}
        />
      </div>


    );
  }
} 
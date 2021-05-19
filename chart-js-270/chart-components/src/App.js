import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import "chartjs-plugin-doughnut-innertext";
import "chartjs-plugin-doughnutlabel";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Doughnut
          data={{
            labels: ['Loss', 'Wins'],
            datasets: [
              {
                label: 'winrate label',
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(165, 247, 184, 0.5)',
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(72, 219, 143, 1)'
                ],
                hoverBackgroundColor: [
                  'rgba(255, 99, 132, 0.3)',
                  'rgba(165, 247, 184, 0.7)',
                ],
                data: [65, 59]
              }
            ]
          }}
          options={{
            title:{
              display:true,
              text:'Winrate',
              fontSize:20,
            },
            legend:{
              display:true,
              position:'bottom',
              reverse: true
            },
            plugins: {
              doughnutlabel: {
                labels: [
                  {                   
                    text: '50%',
                    font: {
                      size: '60'
                    },
                    color: 'rgba(72, 219, 143, 1)'
                  }
                ]
              }
            }
          }}
        />
      </div>
    );
  }
}
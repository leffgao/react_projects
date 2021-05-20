import React from 'react';
import {Doughnut, HorizontalBar} from 'react-chartjs-2';
import "chartjs-plugin-doughnutlabel";

export default class App extends React.Component {
  render() {
    var char_dict = {
      0 : "CAPTAIN_FALCON",
      1 : "DONKEY_KONG",
      2 : "FOX" ,
      3 : "GAME_AND_WATCH",
      4 : "KIRBY",
      5 : "BOWSER",
      6 : "LINK",
      7 : "LUIGI",
      8 : "MARIO",
      9 : "MARTH",
      10 : "MEWTWO",
      11 : "NESS",
      12 : "PEACH",
      13 : "PIKACHU",
      14 : "ICE_CLIMBERS",
      15 : "JIGGLYPUFF",
      16 : "SAMUS",
      17 : "YOSHI",
      18 : "ZELDA",
      19 : "SHEIK",
      20 : "FALCO",
      21 : "YOUNG_LINK",
      22 : "DR_MARIO",
      23 : "ROY",
      24 : "PICHU",
      25 : "GANONDORF"
    }

    var stockIconArr = [
      'Captain Falcon.png', 'Donkey Kong.png', 'Fox.png', 'Game & Watch.png', 'Kirby.png', 'Link.png',
      'Luigi.png', 'Mario.png', 'Marth.png', 'Mewtwo.png', 'Ness.png', 'Peach.png', 'Pikachu.png',
      'Ice Climbers.png', 'Jigglypuff.png', 'Samus.png', 'Yoshi.png', 'Zelda.png', 'Sheik.png',
      'Falco.png', 'Young Link.png', 'Dr. Mario.png', 'Roy.png', 'Pichu.png', 'Ganondorf.png'
    ]

    var charUsage = [
      120,   0, 122,  0,  0, 0,  0,  0,
        0, 107,   0,  0, 43, 0, 14, 76,
        0,   0,   0, 65, 94, 0,  1,  0,
        0,   0
    ]

    var dict = {}

    for (let i = 0; i < charUsage.length; i++) {        
      dict[i] = charUsage[i];
    }

    var items = Object.keys(dict).map(function(key) {
      return [key, dict[key]];
    });

    items.sort(function(first, second) {
      return second[1] - first[1];
    });

    console.log(items)

    var charLabels = []


    return (
      <div>
        {/* <Donut 
          labels={['Loss', 'Wins']}
          data={[100, 200]}
          title='Winrate'
          percentage = {parseInt((100/300) * 100)}
        /> */}

        <BarChart />
      </div>
    );
  }
}

class Donut extends React.Component {
  render() {
    var percent = this.props.percentage;
    var color = 'rgba(255, 99, 132, 1)';

    if (percent >= 50) {
      color = 'rgba(72, 219, 143, 1)';
    }

    return (
      <div>
        <Doughnut
          data={{
            labels: this.props.labels,
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
                data: this.props.data
              }
            ]
          }}
          options={{
            title:{
              display:true,
              text: this.props.title,
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
                    text: percent + '%',
                    font: {
                      size: '60'
                    },
                    color: color
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

class BarChart extends React.Component {
  render() {
    const plugins = [{
      afterDraw: chart => {
        let ctx = chart.chart.ctx; 
        ctx.save();
        let xAxis = chart.scales['x-axis-0'];
        let yAxis = chart.scales['y-axis-0'];
        yAxis.ticks.forEach((value, index) => {  
          let y = yAxis.getPixelForTick(index);      
          let image = new Image();
          image.src = "CaptainFalcon.png"
          ctx.drawImage(image, xAxis.left - 30, y - 13, image.width*.36, image.width*.36);
          
        });  
        ctx.restore();    
    }}];
  


    return (
      <div>
        <HorizontalBar
          data={{
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple','Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'test','Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'test','Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'test',],
            datasets: [
              {
                label: "'# of Votes'",
                data: [12, 19, 3, 5, 2,12, 19, 3, 5, 2, 3,9,12, 19, 3, 5, 2, 3,9,12, 19, 3, 5, 2, 3,9,12, 19, 3, 5, 2, ],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 159, 64, 0.2)',
                ],
                borderWidth: 1,
              },
            ],
          }}
          options={{            
            layout: {
              padding: 40
            },
            scales: {
              yAxes: [{
                ticks: {
                  display: false,
                  beginAtZero: true
                }
              }],
              xAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }],
            }

          }}
          plugins={plugins}
        />
      </div>
    );
  }
}
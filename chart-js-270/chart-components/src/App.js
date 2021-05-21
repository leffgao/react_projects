import React from 'react';
import {Doughnut, HorizontalBar} from 'react-chartjs-2';
import "chartjs-plugin-doughnutlabel";

export default class App extends React.Component {
  render() {
    var charDict = {
      0 : "Captain Falcon.png",
      1 : "Donkey Kong.png",
      2 : "Fox.png" ,
      3 : "Game & Watch.png",
      4 : "Kirby.png",
      5 : "Bowser.png",
      6 : "Link.png",
      7 : "Luigi.png",
      8 : "Mario.png",
      9 : "Marth.png",
      10 : "Mewtwo.png",
      11 : "Ness.png",
      12 : "Peach.png",
      13 : "Pikachu.png",
      14 : "Ice Climbers.png",
      15 : "Jigglypuff.png",
      16 : "Samus.png",
      17 : "Yoshi.png",
      18 : "Zelda.png",
      19 : "Sheik.png",
      20 : "Falco.png",
      21 : "Young Link.png",
      22 : "Dr. Mario.png",
      23 : "Roy.png",
      24 : "Pichu.png",
      25 : "Ganondorf.png"
    }

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

    //console.log(items)

    var charLabels = [];
    var charData = [];
    var charImage = [];

    for (let j = 0; j < items.length; j++) {
      if((items[j][1]) !== 0){
        charLabels.push((charDict[items[j][0]]).replace(".png", ""))
        charData.push(items[j][1]);
        charImage.push(charDict[items[j][0]]);
      }
      
    }

    console.log(charLabels);
    console.log(charData);
    console.log(charImage);

    return (
      <div>
        {/* <Donut 
          labels={['Loss', 'Wins']}
          data={[100, 200]}
          title='Winrate'
          percentage = {parseInt((100/300) * 100)}
        /> */}

        <BarChart 
          charData = {charData}
          charLabels = {charLabels}
          charImage = {charImage}
        />
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
          image.src = '/stock_icons/' + this.props.charImage[index]
          ctx.drawImage(image, xAxis.left - 30, y - 13, image.width*.36, image.width*.36);
          
        });  
        ctx.restore();    
    }}];
  


    return (
      <div>
        <HorizontalBar
          data={{
            labels: this.props.charLabels,
            datasets: [
              {
                label: "'# of Votes'",
                data: this.props.charData,
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
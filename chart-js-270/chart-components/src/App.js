import React from 'react';
import {Doughnut, HorizontalBar, Pie} from 'react-chartjs-2';
import "chartjs-plugin-doughnutlabel";
import "chartjs-plugin-labels";

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

    var charbackgroundColorDict = {
      0 : 'rgba(255, 99, 132, 0.2)',
      1 : 'rgba(170, 85, 0, 0.2)',
      2 : 'rgba(255, 159, 36, 0.2)' ,
      3 : 'rgba(15, 15, 15, 0.2)',
      4 : 'rgba(255, 99, 192, 0.2)',
      5 : 'rgba(50, 128, 20, 0.2)',
      6 : 'rgba(20, 192, 20, 0.2)',
      7 : 'rgba(20, 150, 70, 0.2)',
      8 : 'rgba(255, 99, 132, 0.2)',
      9 : 'rgba(114, 162, 235, 0.2)',
      10 : 'rgba(153, 102, 255, 0.2)',
      11 : 'rgba(200, 99, 132, 0.2)',
      12 : 'rgba(255, 186, 0, 0.3)',
      13 : 'rgba(255, 186, 90, 0.3)',
      14 : 'rgba(54, 162, 235, 0.2)',
      15 : 'rgba(255, 99, 255, 0.2)',
      16 : 'rgba(255, 65, 50, 0.2)',
      17 : 'rgba(75, 192, 192, 0.2)',
      18 : 'rgba(255, 150, 50, 0.3)',
      19 : 'rgba(154, 162, 235, 0.3)',
      20 : 'rgba(54, 50, 235, 0.2)',
      21 : 'rgba(75, 192, 20, 0.2)',
      22 : 'rgba(192, 192, 192, 0.4)',
      23 : 'rgba(191, 0, 0, 0.2)',
      24 : 'rgba(255, 242, 0, 0.3)',
      25 : 'rgba(128, 0, 64, 0.3)'
    }

    var charborderColorDict = {
      0 : 'rgba(195, 99, 132, 1)',
      1 : 'rgba(170, 85, 0, 1)',
      2 : 'rgba(255, 159, 36, 1)' ,
      3 : 'rgba(15, 15, 15, 0.5)',
      4 : 'rgba(255, 99, 192, 1)',
      5 : 'rgba(50, 128, 20, 1)',
      6 : 'rgba(20, 192, 20, 1)',
      7 : 'rgba(20, 150, 70, 1)',
      8 : 'rgba(255, 99, 132, 1)',
      9 : 'rgba(114, 162, 235, 1)',
      10 : 'rgba(153, 102, 255, 1)',
      11 : 'rgba(200, 99, 132, 1)',
      12 : 'rgba(141, 141, 0, 1)',
      13 : 'rgba(141, 141, 90, 1)',
      14 : 'rgba(54, 162, 235, 1)',
      15 : 'rgba(255, 99, 255, 1)',
      16 : 'rgba(255, 65, 50, 1)',
      17 : 'rgba(75, 192, 192, 1)',
      18 : 'rgba(255, 150, 50, 1)',
      19 : 'rgba(50, 5, 150, 0.5)',
      20 : 'rgba(54, 50, 235, 1)',
      21 : 'rgba(75, 192, 20, 1)',
      22 : 'rgba(100, 100, 100, 1 )',
      23 : 'rgba(191, 0, 0, 1)',
      24 : 'rgba(147, 147, 0, 1)',
      25 : 'rgba(128, 0, 64, 1)'
    }

    var charhoverColorDict = {
      0 : 'rgba(255, 99, 132, 0.6)',
      1 : 'rgba(170, 85, 0, 0.6)',
      2 : 'rgba(255, 159, 36, 0.6)' ,
      3 : 'rgba(15, 15, 15, 0.6)',
      4 : 'rgba(255, 99, 192, 0.6)',
      5 : 'rgba(50, 128, 20, 0.6)',
      6 : 'rgba(20, 192, 20, 0.6)',
      7 : 'rgba(20, 150, 70, 0.6)',
      8 : 'rgba(255, 99, 132, 0.6)',
      9 : 'rgba(114, 162, 235, 0.6)',
      10 : 'rgba(153, 102, 255, 0.6)',
      11 : 'rgba(200, 99, 132, 0.6)',
      12 : 'rgba(255, 186, 0, 0.6)',
      13 : 'rgba(255, 186, 90, 0.6)',
      14 : 'rgba(54, 162, 235, 0.6)',
      15 : 'rgba(255, 99, 255, 0.6)',
      16 : 'rgba(255, 65, 50, 0.6)',
      17 : 'rgba(75, 192, 192, 0.6)',
      18 : 'rgba(255, 150, 50, 0.6)',
      19 : 'rgba(154, 162, 235, 0.6)',
      20 : 'rgba(54, 50, 235, 0.6)',
      21 : 'rgba(75, 192, 20, 0.6)',
      22 : 'rgba(192, 192, 192, 0.6)',
      23 : 'rgba(191, 0, 0, 0.6)',
      24 : 'rgba(255, 242, 0, 0.6)',
      25 : 'rgba(128, 0, 64, 0.6)'
    }

    var charUsage = [
      120,   0, 122,  0,  0, 0,  0,  0,
        0, 107,   0,  0, 43, 0, 14, 76,
        0,   0,   0, 65, 94, 0,  1,  0,
        0,   0
    ]

    var charWins = [
      46,  0, 54,  0,  0, 0, 0,  0,    
       0, 54,  0,  0, 21, 0, 3, 32,    
       0,  0,  0, 41, 41, 0, 0,  0,    
       0,  0
    ]

    var charLoss = [
      56,  0, 52,  0,  0, 0, 0,  0,
       0, 39,  0,  0, 14, 0, 3, 28,
       0,  0,  0, 11, 39, 0, 0,  0,
       0,  0
    ]

    var asTitle = "Winrate % As Character";

    var vsUsage = [
      77,   0, 121,  0,   0, 1,  5,  9,
       7, 100,   5,  2,  23, 3,  8, 29,
      10,   4,   0, 48, 161, 2, 13,  5,
       0,   9
    ]

    var vsWins = [
      43,  0, 50,  0,  0, 0,  3,  5,   
       5, 42,  3,  1,  4, 0,  3, 15,   
       3,  1,  0, 22, 73, 1, 11,  1,   
       0,  6
    ]

    var vsLoss = [
      24,  0, 52,  0,  0, 1, 1,  3,    
       2, 39,  0,  0, 14, 1, 4, 10,    
       5,  3,  0, 17, 63, 0, 1,  2,    
       0,  0
    ]

    var vsTitle = "Winrate % Vs Character"

    var charUseTitle = "Chartacter Usage"

    function characterBarChartData(charUsage, charWins, charLoss, title){
      var dict = {}
      var windict = {}
      var lossdict = {}
  
      for (let i = 0; i < charUsage.length; i++) {        
        dict[i] = charUsage[i];
        windict[i] = charWins[i];
        lossdict[i] = charLoss[i];
      }
  
      var items = Object.keys(dict).map(function(key) {
        return [key, dict[key]];
      });
  
      items.sort(function(first, second) {
        return second[1] - first[1];
      });
  
      console.log(items)
  
      var charLabels = [];
      var charData = [];
      var charImage = [];
      var charbackgroundColor = [];
      var charborderColor = []
  
      for (let j = 0; j < items.length; j++) {
        if((items[j][1]) !== 0){
          charLabels.push((charDict[items[j][0]]).replace(".png", "") + " (" + items[j][1] + " games)")
  
          var wins = charWins[items[j][0]];
          var loss = charLoss[items[j][0]];
  
          if(wins == 0){
            charData.push(0) 
          }else{
            charData.push(parseInt (wins/(wins+loss)* 100) ) 
          }
  
          charImage.push(charDict[items[j][0]]);
          charbackgroundColor.push(charbackgroundColorDict[items[j][0]]);
          charborderColor.push(charborderColorDict[items[j][0]]);
        }    
      }
  
      return <BarChart 
                charData = {charData}
                charLabels = {charLabels}
                charImage = {charImage}
                charbackgroundColor = {charbackgroundColor}
                charborderColor = {charborderColor}
                title = {title}
    />

    }

    function characterPieChart(charUsage, title){
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
  
      var charLabels = [];
      var charData = [];
      var charImage = [];
      var charbackgroundColor = [];
      var charborderColor = [];
      var charhoverColor = [];
      var sum = charUsage.reduce(function(a, b){
        return a + b;
      }, 0);

      for (let j = 0; j < items.length; j++) {
        if((items[j][1]) !== 0){
          charLabels.push((charDict[items[j][0]]).replace(".png", "") + " (" + items[j][1] + " games)");
          charData.push(items[j][1]);

          if(items[j][1]/sum > 0.060) {
            charImage.push({
              src: '/stock_icons/' + charDict[items[j][0]],
              width: 32,
              height: 32,
            });
          }


          charbackgroundColor.push(charbackgroundColorDict[items[j][0]]);
          charborderColor.push(charborderColorDict[items[j][0]]);
          charhoverColor.push(charhoverColorDict[items[j][0]]);
        }    
      }

      console.log(charImage)
  
      return <PieChart 
                charData = {charData}
                charLabels = {charLabels}
                charImage = {charImage}
                charbackgroundColor = {charbackgroundColor}
                charborderColor = {charborderColor}
                charhoverBackgroundColor = {charhoverColor}
                title = {title}
    />

    }

    return (
      <div>
        {/* <Donut 
          labels={['Loss', 'Wins']}
          data={[100, 200]}
          title='Winrate'
          percentage = {parseInt((200/300) * 100)}
        />

      {characterBarChartData(charUsage, charWins, charLoss, asTitle)}
      {characterBarChartData(vsUsage, vsWins, vsLoss, vsTitle)} */}

      {characterPieChart(charUsage,charUseTitle)}

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
              fontSize:20
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
                label: "Winrate %",
                data: this.props.charData,
                backgroundColor: this.props.charbackgroundColor,
                borderColor: this.props.charborderColor,
                borderWidth: 1,
              },
            ],
          }}
          options={{            
            layout: {
              padding: {
                right: 140,
                left: 50,
                top: 50
              }
            },
            scales: {
              yAxes: [{
                ticks: {
                  display: false,
                  beginAtZero: true,                  
                },
              }],
              xAxes: [{
                ticks: {
                  beginAtZero: true,
                },
                gridLines: {
                  
                }
              }],
            },
            tooltips: {
              xAlign:  'left',
              yAlign: 'center'
            }, 
            title: {
              display: true,
              text: this.props.title,
              fontSize: 20
            },
            legend: {
              display: false
            }
                        
          }}
          plugins={plugins}
        />
      </div>
    );
  }
}

class PieChart extends React.Component {
  render(){
    return(
      <div>
        <Pie
          data={{
            labels: this.props.charLabels,
            datasets: [
              {
                label: this.props.title,
                backgroundColor: this.props.charbackgroundColor,
                borderColor: this.props.charborderColor,
                hoverBackgroundColor: this.props.charhoverBackgroundColor,
                data: this.props.charData
              }
            ]
          }}
          options={{
            
            title:{
              display: true,
              text: this.props.title,
              fontSize: 20,
              position: 'top'
            },
            legend: {
            position: 'chartArea',
              labels: {
                boxWidth: 20,
              
              }
            },
            plugins: {
              labels: {
                render: "image",
                images: this.props.charImage
              }
            }
          }}
        />
      </div>
    )
  }
}
import React from 'react';
import {Bar} from 'react-chartjs-2';
import "chartjs-plugin-doughnutlabel";
import "chartjs-plugin-labels";
import Chart from 'chart.js';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.movesBarChart = this.movesBarChart.bind(this);

    this.state = {
      isNeutral: true,
      isCounterhit: true,
      dataset: []
    }

  }

  handleInputChange(e){
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
       [name]: value
    })
  }

  movesBarChart(charDict, charbackgroundColorDict, charborderColorDict, myNeutralArr, myCounterArr,
     items){
    this.state.dataset.splice(0, this.state.dataset.length);

    if(this.state.isNeutral){
      for (let i = 0; i < myNeutralArr.length; i++) {
        this.state.dataset.push(
          {
            label: (charDict[items[i][0]]).replace(".png", ""),
            data: [
              myNeutralArr[i][0]+myNeutralArr[i][1]+myNeutralArr[i][2]+myNeutralArr[i][3],
              myNeutralArr[i][4],myNeutralArr[i][5],myNeutralArr[i][6],myNeutralArr[i][7],
              myNeutralArr[i][8],myNeutralArr[i][9],myNeutralArr[i][10],myNeutralArr[i][11],
              myNeutralArr[i][12],myNeutralArr[i][13],myNeutralArr[i][14],myNeutralArr[i][15],
              myNeutralArr[i][16],myNeutralArr[i][17],myNeutralArr[i][18],myNeutralArr[i][19],
              myNeutralArr[i][20]+myNeutralArr[i][21],
              myNeutralArr[i][22]+myNeutralArr[i][23]+myNeutralArr[i][24]+myNeutralArr[i][25]+myNeutralArr[i][26],
              myNeutralArr[i][27]+myNeutralArr[i][28]
            ],
            backgroundColor: charbackgroundColorDict[items[i][0]],
            borderColor: charborderColorDict[items[i][0]],
            borderWidth: 1,
            stack: 'Neutral Wins'
          }
        )        
      }
    }

    if(this.state.isCounterhit){
      for (let i = 0; i < myCounterArr.length; i++) {
        this.state.dataset.push(
          {
            label: (charDict[items[i][0]]).replace(".png", ""),
            data: [
              myCounterArr[i][0]+myCounterArr[i][1]+myCounterArr[i][2]+myCounterArr[i][3],
              myCounterArr[i][4],myCounterArr[i][5],myCounterArr[i][6],myCounterArr[i][7],
              myCounterArr[i][8],myCounterArr[i][9],myCounterArr[i][10],myCounterArr[i][11],
              myCounterArr[i][12],myCounterArr[i][13],myCounterArr[i][14],myCounterArr[i][15],
              myCounterArr[i][16],myCounterArr[i][17],myCounterArr[i][18],myCounterArr[i][19],
              myCounterArr[i][20]+myCounterArr[i][21],
              myCounterArr[i][22]+myCounterArr[i][23]+myCounterArr[i][24]+myCounterArr[i][25]+myCounterArr[i][26],
              myCounterArr[i][27]+myCounterArr[i][28]
            ],
            backgroundColor: charbackgroundColorDict[items[i][0]],
            borderColor: charborderColorDict[items[i][0]],
            borderWidth: 1,
            stack: 'Counter Hits'
          }
        )
      }
    }


  }

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

    var neutralWins = [
      [
        1,   0, 91,  13,   6,  6, 4, 13,   0, 6, 4, 3,
        2, 279, 62, 130, 162, 89, 1, 37,   2, 1, 0, 0,
        0,   0,  0,   0,   0,  0, 0,  0,   0, 0, 0, 0,
        0,   0,  0,   0,   0,  0, 0,  0,   0, 0, 0, 0,
        0,   0,  0,   0,  35,  3, 6,  4, 114, 0, 0, 0,
        0,   0,  1
      ],
      [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0
      ],
      [
        0,   3, 25,   0,  0,   0, 38,  5, 47,  10, 4, 47,
        2, 235, 32, 143, 17, 151,  5,  5,  7, 209, 0,  0,
        0,   0,  0,   0,  0,   0,  0,  0,  0,   0, 0,  0,
        0,   0,  0,   0,  0,   0,  0,  0,  0,   0, 0,  0,
        0,   0,  0,   0, 19,   5,  9, 66,  0,   0, 0,  0,
        0,   0,  0
      ],
      [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0
      ],
      [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0
      ],
      [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0
      ],
      [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0
      ],
      [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0
      ],
      [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0
      ],
      [
        0,  0,  22,  1,  0,  0, 41, 13, 87, 37, 44, 1,
        8, 69, 216, 19, 56, 56, 11, 29, 10,  7,  0, 0,
        0,  0,   0,  0,  0,  0,  0,  0,  0,  0,  0, 0,
        0,  0,   0,  0,  0,  0,  0,  0,  0,  0,  0, 0,
        0,  0,   0,  0, 65, 49, 11, 52, 48,  0,  0, 0,
        0,  0,   1
      ],
      [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0
      ],
      [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0
      ],
      [
        1,   26, 10, 1,
        0,   0,  56, 3,
        0,   1,  2,  1,
        22,  73, 46, 63,
        24,  7,  0,  0,
        14,  0,  0,  0,
        0,   0,  0,  0,
        0,   0,  0,  0,
        0,   0,  0,  0,
        0,   0,  0,  0,
        0,   0,  0,  0,
        0,   0,  0,  0,
        0,   0,  0,  0,
        7,   7,  3,  8,
        1,   0,  0,  0,
        0,   0,  0,
        NaN
      ],
      [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0
      ],
      [
        8, 0, 7,  0,  0, 0,  4, 1, 1, 0, 5, 1,
        6, 2, 2, 15,  8, 5, 13, 3, 0, 2, 0, 0,
        0, 0, 0,  0,  0, 0,  0, 0, 0, 0, 0, 0,
        0, 0, 0,  0,  0, 0,  0, 0, 0, 0, 0, 0,
        0, 0, 0,  0, 10, 1,  1, 1, 2, 0, 0, 0,
        0, 0, 0
      ],
      [
        0,  1,  4,   0,  0,  0, 23,  4, 10,  1, 14, 13,
        3, 57, 44, 137, 82, 44,  2, 26,  0, 10,  0,  0,
        0,  0,  0,   0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,   0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,   0,  5, 23, 20, 29,  6,  0,  0,  0,
        0,  0,  1
      ],
      [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0
      ],
      [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0
      ],
      [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0
      ],
      [
         0,  0,  37,  2,  0, 1, 45, 63,  9, 7, 0, 3,
        21, 39, 132, 96,  8, 0, 56,  0,  0, 0, 0, 0,
         0,  0,   0,  0,  0, 0,  0,  0,  0, 0, 0, 0,
         0,  0,   0,  0,  0, 0,  0,  0,  0, 0, 0, 0,
         0,  0,   0,  0, 27, 5, 14,  0, 35, 0, 0, 0,
         0,  0,   1
      ],
      [
        0,  0, 18,  0, 0,   0,  20, 6, 45,  10, 12, 3,
        5, 60, 12, 71, 8, 146, 331, 7,  2, 106,  0, 0,
        0,  0,  0,  0, 0,   0,   0, 0,  0,   0,  0, 0,
        0,  0,  0,  0, 0,   0,   0, 0,  0,   0,  0, 0,
        0,  0,  0,  0, 8,   5,   4, 5,  1,   0,  0, 0,
        0,  0,  0
      ],
      [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0
      ],
      [
        0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        2, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0
      ],
      [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0
      ],
      [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0
      ],
      [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0
      ]
    ]

    var counterHits = [
      [
        2,   0, 42,  6,   1,  0, 6, 19,  1, 18, 5, 1,
        5, 113, 55, 44, 162, 46, 2, 28, 17,  7, 0, 0,
        0,   0,  0,  0,   0,  0, 0,  0,  0,  0, 0, 0,
        0,   0,  0,  0,   0,  0, 0,  0,  0,  0, 0, 0,
        0,   0, 17, 15,  59,  1, 1,  4, 42,  0, 0, 0,
        0,   4,  8
      ],
      [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0
      ],
      [
        0,  1, 18,  1,  0,  0, 20,  6, 30,  18, 5, 30,
        7, 83, 16, 82,  9, 94,  1, 29, 56, 180, 0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,   0, 0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,   0, 0,  0,
        0,  0,  8,  4, 19,  1,  4, 17,  2,   0, 0,  0,
        0,  2,  9
      ],
      [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0
      ],
      [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0
      ],
      [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0
      ],
      [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0
      ],
      [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0
      ],
      [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0
      ],
      [
        0,  1,  21,  0,  0,  0, 5,  7, 67, 30, 25, 2,
        7, 29, 216, 18, 70, 36, 6, 33, 75,  5,  0, 0,
        0,  0,   0,  0,  0,  0, 0,  0,  0,  0,  0, 0,
        0,  0,   0,  0,  0,  0, 0,  0,  0,  0,  0, 0,
        0,  0,   9,  0, 61, 13, 3, 29, 18,  0,  0, 0,
        0,  0,   3
      ],
      [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0
      ],
      [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0
      ],
      [
        0,   13, 18, 0,
        0,   0,  14, 5,
        1,   6,  0,  0,
        31,  61, 22, 53,
        14,  18, 2,  0,
        23,  0,  0,  0,
        0,   0,  0,  0,
        0,   0,  0,  0,
        0,   0,  0,  0,
        0,   0,  0,  0,
        0,   0,  0,  0,
        0,   0,  0,  0,
        0,   0,  3,  0,
        7,   1,  1,  10,
        1,   0,  0,  0,
        0,   2,  2,  
        NaN
      ],
      [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0
      ],
      [
         5, 1, 4, 0, 0, 0, 0, 1, 0, 1, 1, 0,
        11, 1, 5, 7, 5, 6, 3, 1, 0, 2, 0, 0,
         0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
         0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
         0, 0, 2, 0, 7, 0, 0, 2, 2, 0, 0, 0,
         0, 0, 0
      ],
      [
        0,  1,   2,  0,  0,  0, 11,  3, 8, 1, 19, 11,
        1, 49, 130, 83, 49, 46,  2, 46, 0, 9,  0,  0,
        0,  0,   0,  0,  0,  0,  0,  0, 0, 0,  0,  0,
        0,  0,   0,  0,  0,  0,  0,  0, 0, 0,  0,  0,
        0,  0,   2,  0,  6,  9, 25, 28, 9, 0,  0,  0,
        0,  1,   3
      ],
      [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0
      ],
      [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0
      ],
      [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0
      ],
      [
         0,  1, 19,  0,  0, 0, 28, 42, 12, 13, 5, 1,
        45, 29, 74, 61,  5, 6, 32,  0, 14,  0, 0, 0,
         0,  0,  0,  0,  0, 0,  0,  0,  0,  0, 0, 0,
         0,  0,  0,  0,  0, 0,  0,  0,  0,  0, 0, 0,
         0,  0,  5,  4, 28, 1, 15,  0, 11,  0, 0, 0,
         0,  2,  0
      ],
      [
         0,  0, 18,  1, 0,   0,  8,  6, 20,  15, 12, 6,
        19, 20, 13, 47, 1, 109, 99, 38, 21, 122,  0, 0,
         0,  0,  0,  0, 0,   0,  0,  0,  0,   0,  0, 0,
         0,  0,  0,  0, 0,   0,  0,  0,  0,   0,  0, 0,
         0,  0, 10,  1, 9,   1,  4,  5,  0,   0,  0, 0,
         0,  3,  4
      ],
      [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0
      ],
      [
        0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 1,
        1, 1, 0, 0, 1, 0, 2, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0
      ],
      [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0
      ],
      [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0
      ],
      [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0
      ]
    ]
    

    // console.log(neutralWins[2])
    
    // var b = neutralWins[2].splice(1,21);
    // var c = b.concat(neutralWins[2].splice(29,7))
    // var d = c.concat(neutralWins[2].splice(33))

    // console.log(d)

    function condenseMovesArr(ogmovesArr, items){
      var newMovesArr = []

      for (let i = 0; i < items.length; i++) {
        if((items[i][1]) !== 0){
          var tempArr = []
          var b = ogmovesArr[items[i][0]].splice(2,21);
          var c = b.concat(ogmovesArr[items[i][0]].splice(29,7));
          tempArr = c.concat(ogmovesArr[items[i][0]].splice(33,2));
          newMovesArr.push(tempArr);
        }
      }

      return newMovesArr;
    }

    var myNeutral = []
    var myCounter = []
    var items = []
  
    function movesBarChartData(charUsage, neutralArr, counterArr, title){
      // creates sorted 2d array for character id and character usage
      var dict = {}
  
      for (let i = 0; i < charUsage.length; i++) {        
        dict[i] = charUsage[i];
      }
  
      items = Object.keys(dict).map(function(key) {
        return [key, dict[key]];
      });
  
      items.sort(function(first, second) {
        return second[1] - first[1];
      });
  
      //console.l og(items)
      
      myNeutral = condenseMovesArr(neutralArr, items)
      myCounter = condenseMovesArr(counterArr, items)
      

      

    }

    return (
    
      <div>
        {/* {console.log(
          'Neutral: ' + this.state.isNeutral 
          + '\nCounterhit: ' + this.state.isCounterhit           
          )} */}

        {movesBarChartData(charUsage, neutralWins, counterHits, 'Moves Usage')}
        {this.movesBarChart(charDict, charbackgroundColorDict, charborderColorDict, myNeutral, myCounter, items)}
        

        {/* {console.log(this.state.dataset)} */}



      <label>
        <input
          name="isNeutral"
          type="checkbox"
          defaultChecked={this.state.isNeutral}
          onChange={this.handleInputChange}
        />
          Neutral
      </label>
      <label>
        <input
          name="isCounterhit"
          type="checkbox"
          defaultChecked={this.state.isCounterhit}
          onChange={this.handleInputChange}
        />
          Counterhit
      </label>
      <MovesBarChart
        dataset = {this.state.dataset}
      />
      </div>
    );
  }
}

class MovesBarChart extends React.Component {
  render(){
    Chart.Tooltip.positioners.middle = elements => {
      let model = elements[0]._model;
      return {
        x: model.x,
        y: (model.base + model.y) / 2
      };
    };

    return(
      <div>
        <Bar
         data = {{
          labels: ['Jab', 'Dash Attack', 'F-tilt', 'U-tilt', 'D-tilt', 'F-Smash',
                  'U-Smash', 'D-Smash', 'Nair', 'Fair', 'Bair', 'Uair', 'Dair', 'Neutral-B',
                  'Side-B', 'Up-B', 'Down-B', 'Get-up Attack', 'Grab', 'Ledge Get-up Attack'],
          datasets: this.props.dataset,
        }}
        
         options = {{
          layout:{
            padding: 100
          },
          scales: {
            yAxes: [
              {
                stacked: true,
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
            xAxes: [
              {
                stacked: true,
              },
            ],
          },
          plugins: {
            labels: {
              render: "image",
              images: ''
            }
          },
          tooltips: {
            
            yAlign: 'center',
            position: 'middle',
            callbacks: {
              label: function(tooltipItem, data) {
                var dataset = data.datasets[tooltipItem.datasetIndex];
                return data.labels[tooltipItem.index] + ' ' + dataset.stack + ': ' + dataset.data[tooltipItem.index];
              },
              title: function(tooltipItem, data) {
                return data.datasets[tooltipItem[0].datasetIndex].label
              }
              
            }
          }
        }}
        />
      </div>
    )
  }
}
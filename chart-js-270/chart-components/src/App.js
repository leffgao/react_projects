import React from 'react';
import {Bar, Doughnut, HorizontalBar, Pie} from 'react-chartjs-2';
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
      isCounterhit: false,
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

  movesBarChart(){
    this.state.dataset.splice(0, this.state.dataset.length);

    if(this.state.isNeutral){
      this.state.dataset.push(
          {
            label: 'Fox',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgb(255, 99, 132)',
            stack: 'neutral'
          },
          {
            label: '# of Blue Votes',
            data: [2, 3, 20, 5, 1, 4],
            backgroundColor: 'rgb(54, 162, 235)',
            stack: 'neutral'
          }
        )
    }

    if(this.state.isCounterhit){
      this.state.dataset.push(
            {
              label: '# of Green Votes',
              data: [3, 10, 13, 15, 22, 30],
              backgroundColor: 'rgb(75, 192, 192)',
              stack: 'counter'
            },
            {
              label: '# of Team Votes',
              data: [13, 20, 1, 3, 6, 8],
              backgroundColor: 'rgb(0, 150, 255)',
              stack: 'counter'
            }
      )
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

    var stageDict = {
      2 : "Fountain Of Dreams.png",
      3 : "Pokemon Stadium.png",
      4 : "Peachs Castle.png",
      5 : "Kongo Jungle.png",
      6 : "Brinstar.png",
      7 : "Corneria.png",
      8 : "Yoshis Story.png",
      9 : "Onett.png",
      10 : "Mute City.png",
      11 : "Rainbow Cruise.png",
      12 : "Jungle Japes.png",
      13 : "Great Bay.png",
      14 : "Hyrule Temple.png",
      15 : "Brinstar Depths.png",
      16 : "Yoshis Island.png",
      17 : "Green Greens.png",
      18 : "Fourside.png",
      19 : "Mushroom Kingdom.png",
      20 : "Mushroom Kingdom 2.png",
      22 : "Venom.png",
      23 : "Poke Floats.png",
      24 : "Big Blue.png",
      25 : "Icicle Mountain.png",
      26 : "Icetop.png",
      27 : "Flat Zone.png",
      28 : "Dreamland.png",
      29 : "Yoshis Island N64.png",
      30 : "Kongo Jungle N64.png",
      31 : "Battlefield.png",
      32 : "Final Destination.png"
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

    var stageWins = [
      0,  0, 45, 53,  0,  0, 4, 3, 45,
      0,  1,  2,  2,  0,  0, 0, 0,  1,
      0,  0,  0,  0,  0,  0, 0, 0,  0,
      0, 49,  0,  4, 41, 42
    ]

    var stageLoss = [
      0,  0, 37, 43,  0,  0, 1, 1, 36,
      0,  0,  0,  2,  0,  0, 0, 0,  1,
      0,  0,  0,  0,  0,  1, 0, 0,  0,
      0, 37,  0,  0, 41, 42
    ]

    var stageUsage = []

    for (let k = 0; k < stageWins.length; k++) {
      stageUsage[k] = stageWins[k] + stageLoss[k]
      
    }

    var vsTitle = "Winrate % Vs Character"

    var charUseTitle = "Character Usage";

    var vsUseTitle = "Opponent Character Usage";

    var stageTitle = "Stage Winrate %"

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
        0,   3, 25,   'a',  'a',   'a', 38,  5, 47,  10, 4, 47,
        2, 235, 32, 143, 17, 151,  5,  5,  7, 209, 0,  0,
        0,   0,  0,   0,  0,   0,  0,  0,  0,   0, 0,  0,
        0,   0,  0,   0,  0,   0,  0,  0,  0,   0, 0,  0,
        0,   0,  'a',   'a', 19,   5,  9, 66,  'a',   0, 0,  0,
        0,   'a',  'a'
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

    var counterHits = 
    [
      2,   0, 42,  6,   1,  0, 6, 19,  1, 18, 5, 1,
      5, 113, 55, 44, 162, 46, 2, 28, 17,  7, 0, 0,
      0,   0,  0,  0,   0,  0, 0,  0,  0,  0, 0, 0,
      0,   0,  0,  0,   0,  0, 0,  0,  0,  0, 0, 0,
      0,   0, 17, 15,  59,  1, 1,  4, 42,  0, 0, 0,
      0,   4,  8
    ]
    

    // console.log(neutralWins[2])
    
    // var b = neutralWins[2].splice(1,21);
    // var c = b.concat(neutralWins[2].splice(29,7))
    // var d = c.concat(neutralWins[2].splice(33))

    // console.log(d)


    function characterBarChartData(myDict, charUsage, charWins, charLoss, title){
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
          charLabels.push((myDict[items[j][0]]).replace(".png", "") + " (" + items[j][1] + " games)")
  
          var wins = charWins[items[j][0]];
          var loss = charLoss[items[j][0]];
  
          if(wins == 0){
            charData.push(0) 
          }else{
            charData.push(parseInt (wins/(wins+loss)* 100) ) 
          }
  
          charImage.push(myDict[items[j][0]]);
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
                type = 'char'
    />

    }

    function stageBarChartData(myDict, charUsage, charWins, charLoss, title){
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
          charLabels.push((myDict[items[j][0]]).replace(".png", "") + " (" + items[j][1] + " games)")
  
          var wins = charWins[items[j][0]];
          var loss = charLoss[items[j][0]];
  
          if(wins == 0){
            charData.push(0) 
          }else{
            charData.push(parseInt (wins/(wins+loss)* 100) ) 
          }
  
          charImage.push(myDict[items[j][0]]);
          charbackgroundColor.push(charbackgroundColorDict[items[j][0]]);
          charborderColor.push(charborderColorDict[items[j][0]]);
        }    
      }
  
      return < StageBarChart 
                charData = {charData.slice(0,6)}
                charLabels = {charLabels.slice(0,6)}
                charImage = {charImage}
                charbackgroundColor = {charbackgroundColor}
                charborderColor = {charborderColor}
                title = {title}
                type = 'char'
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
  
    function movesBarChartData(charUsage, title){
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
  

  
      var charData = [];
      var charbackgroundColor = [];
      var charborderColor = [];
      var charhoverColor = [];


      for (let j = 0; j < items.length; j++) {
        if((items[j][1]) !== 0){
          charData.push(items[j][1]);

          charbackgroundColor.push(charbackgroundColorDict[items[j][0]]);
          charborderColor.push(charborderColorDict[items[j][0]]);
          charhoverColor.push(charhoverColorDict[items[j][0]]);
        }    
      }
  


    }

    return (
    
      <div>
        {/* {console.log(
          'Neutral: ' + this.state.isNeutral 
          + '\nCounterhit: ' + this.state.isCounterhit           
          )} */}

        {this.movesBarChart()}
        {movesBarChartData(charUsage, vsTitle)}

        {/* {console.log(this.state.dataset)} */}

        <Donut 
          labels={['Loss', 'Wins']}
          data={[100, 200]}
          title='Winrate'
          percentage = {parseInt((200/300) * 100)}
        />

      
      {characterPieChart(charUsage,charUseTitle)}
      {characterPieChart(vsUsage,vsUseTitle)}

      {characterBarChartData(charDict, charUsage, charWins, charLoss, asTitle)}
      {characterBarChartData(charDict, vsUsage, vsWins, vsLoss, vsTitle)}

      {stageBarChartData(stageDict, stageUsage, stageWins, stageLoss, 'Stage wins')}


      <label>
        <input
          name="isNeutral"
          type="checkbox"
          value={this.state.isNeutral}
          onChange={this.handleInputChange}
        />
          Neutral
      </label>
      <label>
        <input
          name="isCounterhit"
          type="checkbox"
          value={this.state.isCounterhit}
          onChange={this.handleInputChange}
        />
          Counterhit
      </label>
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
              reverse: true,
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
              },
              labels: {
                fontSize: 0
              },
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
          image.src =  '/stock_icons/' + this.props.charImage[index]

            ctx.drawImage(image, xAxis.left - 30, y - 13, image.width*.36, image.height*.36);

          
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
                top: 50,
                bottom: 50
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

class StageBarChart extends React.Component {
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
          image.src =  '/stock_icons/' + this.props.charImage[index]

            ctx.drawImage(image, xAxis.left - 125, y - 48, image.width*.13, image.height*.13);

          
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
                left: 150,
                top: 50,
                bottom: 50
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
            },
            tooltips: {
              callbacks: {
                label: function(tooltipItem, data) {
                  var dataset = data.datasets[tooltipItem.datasetIndex];
                  var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
                    return previousValue + currentValue;
                  });

                  var currentValue = dataset.data[tooltipItem.index];
                  var oglabel = data.labels[tooltipItem.index];
                  var precentage = Math.floor(((currentValue/total) * 100)+0.5);         
                  return oglabel + " : " + precentage + "%";
                }
              }
            }
          }}
        />
      </div>
    )
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
          labels: ['Jab', 'Nair', '3', '4', '5', '6'],
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
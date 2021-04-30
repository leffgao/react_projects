import React, { Component } from 'react'
import Select from 'react-select'
import axios from 'axios'

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      selectOptions : [],
      value: []
    }
  }

 async getOptions(){
    // const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    // const data = res.data

    // const options = data.map(d => ({
    //   "value" : d.name,
    //   "label" : <div><img src={'logo512.png'} height="30px" width="30px"/> {d.name}</div>

    // }))

    let chararr = [
      "BOWSER","CAPTAIN_FALCON","DONKEY_KONG","DR_MARIO",
      "FALCO","FOX","GAME_AND_WATCH","GANONDORF","ICE_CLIMBERS",
      "JIGGLYPUFF","KIRBY","LINK","LUIGI","MARIO","MARTH","MEWTWO",
      "NESS","PEACH","PICHU","PIKACHU","ROY","SAMUS","SHEIK","YOSHI",
      "YOUNG_LINK","ZELDA"
    ]

    let charpng = [
      "Bowser.png","Captain Falcon.png","Donkey Kong.png","Dr. Mario.png",
      "Falco.png","Fox.png","Game & Watch.png","Ganondorf.png","Ice Climbers.png",
      "Jigglypuff.png","Kirby.png","Link.png","Luigi.png","Mario.png","Marth.png","Mewtwo.png",
      "Ness.png","Peach.png","Pichu.png","Pikachu.png","Roy.png","Samus.png","Sheik.png","Yoshi.png",
      "Young Link.png","Zelda.png"
    ]

    const arr1 = ["1","2"];
    const arr2 = ["one", "two"];

    const options = chararr.map((x,i) => ({
      "value": x,
      "label": <div><img src={`stock_icons/${charpng[i]}`} height="30px" width="30px"/> {x}</div>
    }))

    this.setState({selectOptions: options})

  }

  handleChange(e){
   this.setState({value: e})
  }

  componentDidMount(){
      this.getOptions()
  }

  render() {
    console.log(this.state.value)
    return (
      <div>
        <Select options={this.state.selectOptions} onChange={this.handleChange.bind(this)} isMulti />
        {
           this.state.value === null ? "" : this.state.value.map(v => <h4>{v.label}</h4>)
        }
      </div>
    )
  }
}
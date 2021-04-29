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
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    const data = res.data

    const options = data.map(d => ({
      "value" : d.name,
      "label" : <div><img src={'logo512.png'} height="30px" width="30px"/> {d.name}</div>

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
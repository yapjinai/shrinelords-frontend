import React, { Component,PureComponent } from 'react'
import '../assets/css/Shrines.css'

const shrinesURL = 'http://localhost:3000/api/v1/shrines'

export default class Shrines extends Component {

  state = {
    shrines: []
  }

  shrinePreview = (shrine) => {
    return (
      <div className="minishrine">
        <img
          src="https://images.unsplash.com/photo-1511804472014-fa7b871cd6a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fc0b35984144aefaedf449d7651661c1&w=1000&q=80"
          />
      </div>
    )
  }

  componentWillMount(){
    fetch(shrinesURL)
    .then(res=>res.json()).then(shrines => this.setState({shrines:shrines}))
  }

  render(){
    return(
      <div className="shrinegrid">
        {this.state.shrines.map(shrine => this.shrinePreview(shrine))}
      </div>
    )
  }

}

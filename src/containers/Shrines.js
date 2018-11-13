import React, { Component } from 'react'
import '../assets/css/Shrines.css'

const shrinesURL = 'http://localhost:3000/api/v1/shrines'

export default class Shrines extends Component {
  state = {
    shrines: []
  }

  shrinePreview = (shrine) => {
    const videoURL = '../assets/video/sparkling_ocean_waves.mp4'
    return (
      <React.Fragment>
        <div className="shrineviewer">
          <center><p>Shrine #{shrine.id}</p></center>
          <div className="minishrine">
          <video
            className="minibackground"
            autoPlay
            muted
            loop
          >
            <source
              src={videoURL}
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      </React.Fragment>
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

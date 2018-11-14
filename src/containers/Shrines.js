import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/Shrines.css'

const shrinesURL = 'http://localhost:3000/api/v1/shrines'

export default class Shrines extends Component {
  state = {
    shrines: [],
    display_shrines:[]
  }

  shrinePreview = (shrine) => {
    // const videoURL = '../assets/video/sparkling_ocean_waves.mp4'
    if(!!shrine.back){
    return (
      <React.Fragment key={1500+shrine.id}>
        <Link to={`/shrines/${shrine.id}`}>
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
                src={shrine.back.video}
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </Link>
      </React.Fragment>
    )}
  }

  componentDidMount(){
    fetch(shrinesURL)
    .then(res=>res.json()).then(shrines => this.setState({
      shrines:shrines,
      display_shrines:shrines.slice(0,3)
    }))
  }

  render(){
    return(
      <div className="Shrines">
        <div className="shrinegrid">
          {this.state.display_shrines.map(shrine => this.shrinePreview(shrine))}
        </div>
      </div>
    )
  }

}

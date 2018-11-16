import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/Shrines.css'

const shrinesURL = 'http://localhost:3000/api/v1/shrines'

export default class Shrines extends Component {
  state = {
    shrines: [],
    display_shrines:[],
    gridclass: "shrinegrid"
  }

  previousShrines = () => {
    return(
      <div className="previousshrines" onClick={this.cycleback}>
        <span className="navtext">{'<'}</span>
      </div>
    )
  }

  cycleback = () => {
    this.setState({gridclass: "shrinegrid_fading_out"})
    let start = this.state.shrines.indexOf(this.state.display_shrines[0])
    let newstart = (Number(start)-3)
    if(newstart<0){newstart=this.state.shrines.length+newstart}
    let newend = (newstart+3)
    let newslice
    if(newend <= this.state.shrines.length){
      newslice=this.state.shrines.slice(newstart,newend)
    }
    else{
      newslice=[...this.state.shrines.slice(newstart,this.state.shrines.length),...this.state.shrines.slice(0,newend-this.state.shrines.length)]
    }
    let newdisplay = () => {(this.setState({
      display_shrines: newslice,
      gridclass: "shrinegrid"
    }))}
    let fadein = () => {(this.setState({
      gridclass: "shrinegrid_fading_in"
    }))}
    setTimeout(fadein, 450)
    setTimeout(newdisplay,600)
  }

  nextShrines = () => {
    return(
      <div className="nextshrines" onClick={this.cycleforward}>
        <span className="navtext">{'>'}</span>
      </div>
    )
  }

  cycleforward = () => {
    this.setState({gridclass: "shrinegrid_fading_out_back"})
    let start = this.state.shrines.indexOf(this.state.display_shrines[0])
    let newstart = (Number(start)+3)
    if(newstart>this.state.shrines.length){newstart=newstart-this.state.shrines.length}
    let newend = (newstart+3)
    let newslice
    if(newend <= this.state.shrines.length){
      newslice=this.state.shrines.slice(newstart,newend)
    }
    else{
      newslice=[...this.state.shrines.slice(newstart,this.state.shrines.length),...this.state.shrines.slice(0,newend-this.state.shrines.length)]
    }
    let newdisplay = () => {(this.setState({
      display_shrines: newslice,
      gridclass: "shrinegrid"
    }))}
    let fadein = () => {(this.setState({
      gridclass: "shrinegrid_fading_in_back"
    }))}
    setTimeout(fadein, 450)
    setTimeout(newdisplay,600)
  }

  shrinePreview = (shrine) => {
    // const videoURL = '../assets/video/sparkling_ocean_waves.mp4'
    if(!!shrine.back){
    return (
      <React.Fragment key={1500+shrine.id}>
        <Link to={`/shrines/${shrine.id}`}>
          <div className="shrineviewer">
            <center><p>{shrine.name}</p></center>
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

  toAbout = () => {
    return(
      <div className="to-about">
        <Link to="/about">
          About
        </Link>
      </div>
    )
  }

  toCreation = () => {
    return(
      <div className="to-creation">
        <Link to="/creation">
          Create
        </Link>
      </div>
    )
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
      <div className="container">
        {this.previousShrines()}
        {this.toAbout()}
        <div className="Shrines">
          <div className={this.state.gridclass}>
            {this.state.display_shrines.map(shrine => this.shrinePreview(shrine))}
          </div>
        </div>
        {this.toCreation()}
        {this.nextShrines()}
      </div>
    )
  }

}

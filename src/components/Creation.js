import React, { Component,PureComponent } from 'react'
import Background from './Background'
import '../assets/css/Creation.css'

const backsURL = "http://localhost:3000/api/v1/backs"

export default class Creation extends Component {

  state = {
    backs: [],
    back_index: 0
  }

  componentWillMount(){
    fetch(backsURL)
    .then(res=>res.json())
    .then(backs => this.setState({backs: backs}))
  }

  nextback = () => {
    let backvideo = document.getElementById('creationvideo')
    backvideo.pause()
    let load_and_play = () => {
      backvideo.load()
      backvideo.play()
    }
    let newindex = this.state.back_index+1
    if(newindex === this.state.backs.length){newindex=0}
    this.setState({back_index: newindex}, load_and_play())
  }

  previousback = () => {
    let backvideo = document.getElementById('creationvideo')
    backvideo.pause()
    let load_and_play = () => {
      backvideo.load()
      backvideo.play()
    }
    let newindex
    if(this.state.back_index===0){newindex = this.state.backs.length-1}
    else{newindex=this.state.back_index-1}
    this.setState({back_index: newindex}, load_and_play())
  }



  background = (back) => {
    return (
      <div className='Background'>
        <video
          id="creationvideo"
          className="shrineback"
          autoPlay
          muted
          loop
        >
          <source
            src={back}
            type="video/mp4"
          />
        </video>
      </div>
    )}

  render(){
    return(
      <div>
        <p className="creationtext">This is the creation page.</p>
        <button onClick={this.previousback}>Previous shrine setting</button>
        <button onClick={this.nextback}>Next shrine setting</button>
        {this.state.backs.length ? this.background(this.state.backs[this.state.back_index].video) : null}
      </div>
    )
  }

}

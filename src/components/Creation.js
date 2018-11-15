import React, { Component,PureComponent } from 'react'
import Background from './Background'
import '../assets/css/Creation.css'

const backsURL = "http://localhost:3000/api/v1/backs"
const shrinesURL = "http://localhost:3000/api/v1/shrines"

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

  newShrine = () => {
    let shrineinput = document.getElementById('shrineinput')
    let back_id = this.state.backs[this.state.back_index].id
    if(!!shrineinput.value && !(shrineinput.value.replace(/\s/,"")==="")){
      fetch(shrinesURL,{
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: shrineinput.value,
          back_id: back_id
        })
      })
      .then(res => window.location="http://localhost:3001")
    }
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
        <center>
          <p className="creationtext">Create a shrine...</p>
          <input id='shrineinput' type='text' placeholder='shrine name'></input><br></br>
          <button className="setting" onClick={this.previousback}>Previous shrine setting</button>
          <button className="setting" onClick={this.nextback}>Next shrine setting</button><br></br>
          <button className="setting" onClick={this.newShrine}>Create!</button>
        </center>
        {this.state.backs.length ? this.background(this.state.backs[this.state.back_index].video) : null}
      </div>
    )
  }

}

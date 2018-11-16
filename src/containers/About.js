import React, { Component } from 'react'
import '../assets/css/About.css'
import { Link } from 'react-router-dom'

export default class About extends Component {

  render(){
    return(
      <div className="about">
        <Link className="aboutlink" to="/">
          <img src="https://cdn.cheapoguides.com/wp-content/uploads/sites/3/2015/04/fushimi-inari-night.jpg" alt="" className="aboutshrine"></img>
          <h4>A Shrine is a place of peace, a place to offer precious things.<br></br>Would you, too, like to be a Shrinelord?</h4></Link>
      </div>
    )
  }
}

import React, { Component } from 'react';
import '../assets/css/Floor.css'

class Floor extends Component {
  render() {
    const videoURL = './assets/video/sparkling_ocean_waves.mp4'





    return (
      <div className='Floor'>
        <img
          id='floor'
          src='http://localhost:3001/assets/img/marble.jpg'
        />
      </div>
    );
  }
}

export default Floor;

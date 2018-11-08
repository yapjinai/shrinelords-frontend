import React, { Component } from 'react';
import '../css/Background.css'

class Background extends Component {
  render() {
    const videoURL = './assets/video/sparkling_ocean_waves.mp4'

    return (
      <div className='Background'>
        <video
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
    );
  }
}

export default Background;

import React, { Component } from 'react';
import '../assets/css/Background.css'

class Background extends Component {
  render() {

    return (
      <div className='Background'>
        <video
          className="shrineback"
          autoPlay
          muted
          loop
        >
          <source
            src={this.props.back}
            type="video/mp4"
          />
        </video>
      </div>
    );
  }
}

export default Background;

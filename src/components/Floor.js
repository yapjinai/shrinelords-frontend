import React, { Component } from 'react';
import '../assets/css/Floor.css'

class Floor extends Component {
  render() {
    return (
      <div className='Floor'>
        <img
          id='floor'
          src='http://localhost:3001/assets/img/marble.jpeg'
          alt='floor'
        />
      </div>
    );
  }
}

export default Floor;

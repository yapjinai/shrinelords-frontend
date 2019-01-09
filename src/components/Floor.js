import React, { Component } from 'react';
import '../assets/css/Floor.css'

class Floor extends Component {
  render() {
    return (
      <div className='Floor'>
        <img
          id='floor'
          src='../../assets/img/marble.jpeg'
          alt='floor'
        />
      </div>
    );
  }

  componentDidMount() {
    const floor = document.querySelector('#floor')
    floor.addEventListener('click', this.handleClick)
  }

  /////////////////////////////

  handleClick = (e) => {
    e.preventDefault()

    // rotate floor
    const floor = document.querySelector('#floor')

    if (floor) {
      floor.classList.add('rotated')

      setTimeout(
        this.displayItems,
        2000
      )
    }
  }

  displayItems = () => {
    // move floor back
    const floorDiv = document.querySelector('.Floor')
    floorDiv.classList.add('back')

    const shrineDiv = document.querySelector('.Shrine')
    shrineDiv.classList.add('visible')
  }
}

export default Floor;

import React, { Component } from 'react'
import '../assets/css/Offering.css'

class Offering extends Component {
  constructor() {
    super()
    this.state = {
      posX: 0,
      posY: 0,
      changeX: 0,
      changeY: 0,
      elmnt: null,
      item: {}
    }
  }

  // style={this.state.itemStyle}
  render() {
    const offering = this.props.offering
    return (
      <div
        className="Offering"
        id={`item-${offering.id}`}
        style={JSON.parse(this.props.offering.style)}
        onMouseDown={this.handleMouseDown}
      >
        <img
          src={this.state.item.image}
          alt={this.state.item.name}
        />
      </div>
    )
  }

  componentDidMount() {
    this.setState({
      elmnt: document.querySelector(`#item-${this.props.offering.id}`),
    })
    this.getItemFromOffering()
  }

////////////////////////////////////////////////////////////////////////

  handleMouseDown = (e) => {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    this.setState({
      posX: e.clientX,
      posY: e.clientY
    })
    document.onmouseup = this.handleMouseUp;
    // call a function whenever the cursor moves:
    document.onmousemove = this.handleMouseMove;
  }

  // EXPERIMENTAL: add perspective
  // const offsetTop = this.state.elmnt.offsetTop
  // const offsetTop = e.clientY
  // const windowHeight = window.innerHeight
  // const ratio = offsetTop / windowHeight
  //
  // const width = parseInt(this.state.itemStyle.width)
  // const newwidth = Math.floor(width * ratio)
  // const newwidthString = `${newwidth}px`
  // const style = {width: newwidthString}
  //////////////////////////////////
  // EXPERIMENTAL: add perspective
  // itemStyle: style
  handleMouseMove = (e) => {

    e = e || window.event;
    e.preventDefault();
    this.setState({
      changeX: this.state.posX - e.clientX,
      changeY: this.state.posY - e.clientY,
      posX: e.clientX,
      posY: e.clientY,
    })

    const elmnt = this.state.elmnt
    elmnt.style.top = (this.state.elmnt.offsetTop - this.state.changeY) + "px";
    elmnt.style.left = (this.state.elmnt.offsetLeft - this.state.changeX) + "px";

    console.log(elmnt.firstChild);
  }

  handleMouseUp = (e) => {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
    this.props.updateCoordinates(this.props.offering.id, this.state.posX, this.state.posY)
  }

  ////////////////////////////////////////////////////

  getItemFromOffering = () => {
    fetch(`http://localhost:3000/api/v1/offerings/${this.props.offering.id}`)
    .then(res => res.json())
    .then(offering => {
      this.setState({
        item: offering.item
      })
    })
  }

}

export default Offering

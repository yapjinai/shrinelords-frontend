import React, { Component } from 'react'
import '../assets/css/Offering.css'

class Offering extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posX: 0,
      posY: 0,
      changeX: 0,
      changeY: 0,
      elmnt: null,
      style: JSON.parse(this.props.offering.style),
      item: {},
    }
  }
  // this.setMouseMode()

  render() {
    this.setCursor()
    const offering = this.props.offering
    const mouseMode = this.props.mouseMode

    return (
      <div
        className="Offering"
        id={`item-${offering.id}`}
        style={this.getResizedStyle()}
        onMouseDown={(mouseMode === 'move') ? this.handleMouseDown : null}
        onClick={this.handleClick}
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

  getItemFromOffering = () => {
    fetch(`http://localhost:3000/api/v1/offerings/${this.props.offering.id}`)
    .then(res => res.json())
    .then(offering => {
      this.setState({
        item: offering.item
      }, () => this.setMaxWidthStyle())
    })
  }

  setMaxWidthStyle = () => {
    if (this.state.item && !this.state.style.maxWidth) {
      const newStyle = {...this.state.style}
      newStyle.maxWidth = this.state.item.size
      this.setState({
        style: newStyle
      })
    }
  }

  setCursor = () => {
    if (this.state.elmnt) {
      const mouseMode = this.props.mouseMode
      const elmnt = this.state.elmnt
      // elmnt.firstChild.setAttribute('class', mouseMode)

      if (mouseMode === 'move') {
        elmnt.firstChild.style.cursor = `move`
      }
      else {
        const cursorUrl = `../../assets/img/${mouseMode}.png`
        const cursorString = `url(${cursorUrl})`
        elmnt.firstChild.style.cursor = `${cursorString}, auto`
      }
    }
  }

////////////////////////////////////////////////////////////////////////

  handleClick = (e) => {
    const mouseMode = this.props.mouseMode
    switch (mouseMode) {
      case 'delete':
        this.props.deleteOffering(this.props.offering.id)
        break;
      case 'up':
        this.props.moveUp(this.props.offering.id)
        break;
      case 'down':
        this.props.moveDown(this.props.offering.id)
        break;
      default:
        break;
    }
  }

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

  handleMouseMove = (e) => {
    e = e || window.event;
    e.preventDefault();
    this.setState({
      changeX: this.state.posX - e.clientX,
      changeY: this.state.posY - e.clientY,
      posX: e.clientX,
      posY: e.clientY,
      style: this.getResizedStyle()
    })

    const elmnt = this.state.elmnt
    elmnt.style.top = (this.state.elmnt.offsetTop - this.state.changeY) + "px";
    elmnt.style.left = (this.state.elmnt.offsetLeft - this.state.changeX) + "px";
  }

  handleMouseUp = (e) => {
    const newX = `"${Math.floor(parseInt(this.state.elmnt.style.left) / window.innerWidth * 100)}%"`
    const newY = `"${Math.floor(parseInt(this.state.elmnt.style.top) / window.innerHeight * 100)}%"`
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
    this.props.updateCoordinates(this.props.offering.id, newX, newY)
  }

  ////////////////////////////////////////////////////

  getResizedStyle = () => {
    const newStyle = {...this.state.style}
    const maxWidth = parseInt(this.state.item.size)

    const windowHeight = window.innerHeight
    const floor = document.querySelector('#floor')
    const floorHeight = floor.getBoundingClientRect().height
    const backgroundHeight = windowHeight - floorHeight

    if (this.state.elmnt) {
      const offsetTop = this.state.elmnt.offsetTop + this.state.elmnt.offsetHeight/2
      const offsetFromEdge = offsetTop - backgroundHeight

      let newWidth

      // const ratio = offsetTop / windowHeight
      const ratio = offsetFromEdge / floorHeight

      if (ratio < 0) {
        newWidth = maxWidth / 2
      }
      else {
        const m = maxWidth - (maxWidth / 2)
        const y = m * ratio + (maxWidth / 2)
        newWidth = Math.floor(y)
      }
      const newWidthString = `${newWidth}px`
      newStyle.maxWidth = newWidthString
    }
    return newStyle
  }

}

export default Offering

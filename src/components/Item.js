import React, { Component } from 'react'
import '../assets/css/Item.css'

class Item extends Component {


  render() {
    const item = this.props.item

    return (
        <div
          className="Item"
          style={item.style}
        >
          <img
            src={item.image}
            alt={item.name}
          />
        </div>
    )
  }
}

export default Item

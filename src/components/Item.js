import React, { Component } from 'react'
import '../assets/css/Item.css'
import { Draggable } from '@shopify/draggable';


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

  componentDidMount() {

    const draggable = new Draggable(document.querySelectorAll('.Shrine'), {
      draggable: '.Item'
    });
    draggable.on('drag:start', () => console.log('drag:start'));
    draggable.on('drag:move', () => console.log('drag:move'));
    draggable.on('drag:stop', () => console.log('drag:stop'));

  }
}

export default Item

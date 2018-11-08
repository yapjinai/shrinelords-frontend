import React, { Component } from 'react';
import Item from '../components/Item'
import '../assets/css/Shrine.css'

class Shrine extends Component {
  displayItems = () => {
    return this.props.shrine.items.map(i => {
      return (
        <Item
          item={i}
          key={i.id}
        />
      )
    })
  }

  render() {
    return (
      <div className="Shrine">
        {this.displayItems()}
      </div>
    );
  }
}

export default Shrine;

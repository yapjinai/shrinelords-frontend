import React, { Component } from 'react';
import Item from '../components/Item'

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
        Shrine
        {this.displayItems()}
      </div>
    );
  }
}

export default Shrine;

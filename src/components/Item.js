import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
      <div className="Item">
        Item: {this.props.item.name}
      </div>
    );
  }
}

export default Item;

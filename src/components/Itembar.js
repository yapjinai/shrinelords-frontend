import React, { Component } from 'react'
import ItembarItem from './ItembarItem'
import '../assets/css/Itembar.css'

class Itembar extends Component {
  render() {
    return(
      <div className="Itembar">
        {this.displayItems()}
      </div>
    )
  }

  displayItems = () => {
    return this.props.items.map(item => {
      return (
        <ItembarItem createOffering={this.props.createOffering} key={1000+item.id} item={item} />
      )
    })
  }

}

export default Itembar

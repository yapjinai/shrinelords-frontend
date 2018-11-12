import React, { Component,PureComponent } from 'react'
import '../assets/css/Leftbar.css'
import LeftbarItem from './LeftbarItem'
import Toolbar from './Toolbar'

export default class Leftbar extends Component {

  constructor() {
    super()
    this.state = {
      className: 'hidden-leftbar'
    }
  }

  render() {
    if(this.state.shown){
      return (
        <div className="leftbar" onClick={this.toggle}>
          {this.displayItems()}
          <br />
          {this.displayToolbar()}
        </div>
      )}
    else {
      return <div className="hidden-leftbar" onClick={this.toggle}></div>
      }
  }

///////////////////////////////////////

  toggle = (event) => {
    if(!(event.target.attributes.getNamedItem("src"))){
    this.setState({shown: !this.state.shown})}
  }

  displayItems = () => {
    return this.props.items.map(item => {
      return (
        <LeftbarItem key={1000+item.id} item={item} />
      )
    })
  }

  displayToolbar = () => {
    return (
      // <Toolbar />
      null
    )
  }
}

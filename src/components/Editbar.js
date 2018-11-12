import React, { Component,PureComponent } from 'react'
import '../assets/css/Editbar.css'
import EditbarItem from './EditbarItem'
import Toolbar from './Toolbar'

export default class Editbar extends Component {

  constructor() {
    super()
    this.state = {
      className: 'hidden-editbar'
    }
  }

  render() {
    if(this.state.shown){
      return (
        <div className="Editbar" onClick={this.toggle}>
          {this.displayItems()}
          <br />
          {this.displayToolbar()}
        </div>
      )}
    else {
      return <div className="hidden-editbar" onClick={this.toggle}></div>
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
        <EditbarItem key={1000+item.id} item={item} />
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

import React, { Component,PureComponent } from 'react'
import '../assets/css/Leftbar.css'
import LeftbarItem from './LeftbarItem'

export default class Leftbar extends Component {

  state = {
    shown: false
  }

  move = (event) => {
    if(!(event.target.attributes.getNamedItem("src"))){
    this.setState({shown: !this.state.shown})}
  }

  render(){
    if(this.state.shown){
      return (
        <div className="leftbar" onClick={this.move}>
          {this.props.items.map(item => <LeftbarItem key={1000+item.id} item={item} />)}
        </div>
      )}
    else {
      return <div className="hidden-leftbar" onClick={this.move}></div>
      }
  }
}

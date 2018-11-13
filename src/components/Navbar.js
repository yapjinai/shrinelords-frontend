import React, { Component } from 'react'
import '../assets/css/Navbar.css'
import Linkbar from './Linkbar'

class Navbar extends Component {

  state = {
    expanded: false
  }

  expandLinkbar = () => {
    this.setState((currentstate) => {
      return {expanded: !currentstate.expanded}
    })
  }

  render() {
    return(
      <React.Fragment>
        <div className="navbar" onClick={this.expandLinkbar}></div>
        {this.state.expanded ? <Linkbar className={"linkbar"} /> : <Linkbar className={"linkbar_hidden"} />}
      </React.Fragment>
    )
  }
}

export default Navbar

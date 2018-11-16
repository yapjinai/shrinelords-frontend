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
        <div className="navbar" onClick={this.expandLinkbar}>
          <img className="compass" src="https://i.pinimg.com/originals/fb/5b/53/fb5b53faf5b17ad41620001f7667184c.png" alt=""></img>
        </div>
        {this.state.expanded ? <Linkbar className={"linkbar"} /> : <Linkbar className={"linkbar_hidden"} />}
      </React.Fragment>
    )
  }
}

export default Navbar

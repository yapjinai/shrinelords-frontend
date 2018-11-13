import React, { Component } from 'react';
import Offering from '../components/Offering'
import '../assets/css/Shrine.css'

class Shrine extends Component {

  render() {
    return (
      <div className="Shrine">
        {this.displayOfferings()}
      </div>
    );
  }

//////////////////////////////////////////////

  displayOfferings = () => {
    if (this.props.shrine && this.props.shrine.offerings) {
      return this.props.shrine.offerings.map(o => {
        return (
          <Offering
          updateCoordinates={this.props.updateCoordinates}
          offering={o}
          mouseMode={this.props.mouseMode}
          key={o.id}
          deleteOffering={this.props.deleteOffering}
          moveUp={this.moveUp}
          moveDown={this.moveDown}
          />
        )
      })
    }
  }

  moveUp = (id) => {

  }

  moveDown = (id) => {

  }
}

export default Shrine;

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
          key={o.id}

          mouseMode={this.props.mouseMode}
          deleteOffering={this.props.deleteOffering}
          moveUp={this.props.moveUp}
          moveDown={this.props.moveDown}
          moveTop={this.props.moveTop}
          moveBottom={this.props.moveBottom}
          />
        )
      })
    }
  }
}

export default Shrine;

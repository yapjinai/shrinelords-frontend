import React, { Component } from 'react';
import Offering from '../components/Offering'
import '../assets/css/Shrine.css'

class Shrine extends Component {
  displayOfferings = () => {
    if (this.props.shrine && this.props.shrine.offerings) {
      return this.props.shrine.offerings.map(o => {
        return (
          <Offering
            updateCoordinates={this.props.updateCoordinates}
            offering={o}
            key={o.id}
          />
        )
      })
    }
  }

  render() {
    return (
      <div className="Shrine">
        {this.displayOfferings()}
      </div>
    );
  }

}

export default Shrine;

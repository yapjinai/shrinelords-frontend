import React, { Component } from 'react';
import Offering from '../components/Offering'
import '../assets/css/Shrine.css'

class Shrine extends Component {
  displayOfferings = () => {
    console.log(this.props.shrine);
    if (this.props.shrine && this.props.shrine.offerings) {
      console.log('displaying offerings!!');
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

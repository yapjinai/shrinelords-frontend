import React, { Component } from 'react';
import Doors from './components/Doors';
import Shrine from './containers/Shrine';
import Background from './components/Background';

import './css/App.css'

class App extends Component {
  render() {
    const shrineTemp = {
      items: [
        {
          id: 1,
          name: 'flower'
        },
        {
          id: 2,
          name: 'candle'
        }
      ]
    }

    return (
      <div className="App">
        App
        <Doors />
        <Shrine
          shrine={shrineTemp}
        />
        <Background />
      </div>
    );
  }
}

export default App;

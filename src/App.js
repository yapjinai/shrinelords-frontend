import React, { Component } from 'react';
import Doors from './components/Doors';
import Shrine from './containers/Shrine';
import Background from './components/Background';

import './assets/css/App.css'
import shrinetemp from './data.json'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Doors />
        <Shrine
          shrine={shrinetemp}
        />
        <Background />
      </div>
    );
  }
}

export default App;

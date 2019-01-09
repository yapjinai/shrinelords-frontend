import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import About from './containers/About'
// import Shrines from './containers/Shrines'
// import Creation from './components/Creation'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom'


ReactDOM.render((
  <Router>
    <React.Fragment>
      <Route path='/' component={App} />
    </React.Fragment>
  </Router>), document.getElementById('root'));

serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Shrines from './containers/Shrines'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom'

ReactDOM.render((
  <Router>
    <React.Fragment>
      <Route exact path='/' component={App} />
      <Route exact path='/shrines' component={Shrines} />
      <Route exact path='/shrines/:id' component={App} />
    </React.Fragment>
  </Router>), document.getElementById('root'));
  
serviceWorker.unregister();

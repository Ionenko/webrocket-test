import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './router';
import './App.scss';
import history from './history';

const App = () => (
  <Router history={history}>
    <div className="App">
      <Routes />
    </div>
  </Router>
);

export default App;

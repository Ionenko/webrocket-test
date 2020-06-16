import React from 'react';
import {Router} from 'react-router-dom';
import block from 'bem-cn-lite';
import Routes from '../../router';
import history from '../../history';
import Header from '../header';
import './app.scss';

const a = block('app');

const App = () => (
  <Router history={history}>
    <div className={a()}>
      <Header />
      <main>
        <Routes />
      </main>
    </div>
  </Router>
);

export default App;

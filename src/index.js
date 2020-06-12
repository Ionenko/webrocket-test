import '@babel/polyfill';
import 'react-app-polyfill/ie9';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

configureStore({}).then((store) => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );
});

serviceWorker.unregister();

import React from 'react';
import { Provider } from "react-redux";
import ReactDOM from 'react-dom';
import App from './App';
import store from './Redux/store';

import './Styles/index.scss';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

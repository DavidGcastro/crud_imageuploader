import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import { Provider } from 'react-redux';
import store from './redux/index';

import './styles/main.scss';
ReactDOM.render(
  <Provider store={store}>
    <div className="first">
      <Main />
    </div>
  </Provider>,
  document.getElementById('root')
);

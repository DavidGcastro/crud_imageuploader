import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import '../node_modules/normalize.css/normalize.css';
import './styles/main.scss';
ReactDOM.render(
  <div className="first">
    <Main />
  </div>,
  document.getElementById('root')
);

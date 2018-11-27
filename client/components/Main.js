import React from 'react';
import Nav from './Nav';
import Form from './MyForm';
import Login from '../screens/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Main = () => {
  return (
    <Router>
      <div id="container">
        <div className="main--content">
          {/*Nav goes here*/}
          <Nav />
          <div className="spacer" />
          {/*Content goes here*/}
          <Login />
        </div>
        {/*Footer goes here*/}
      </div>
    </Router>
  );
};

export default Main;

import React from 'react';
import Nav from './Nav';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
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
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />

          </Switch>
        </div>
        {/*Footer goes here*/}
      </div>
    </Router>
  );
};

export default Main;

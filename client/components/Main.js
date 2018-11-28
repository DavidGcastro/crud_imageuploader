import React from 'react';
import Nav from './Nav';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Profile from '../auth/Profile';
import Home from './Home';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
const Main = () => {
  return (
    <Router history={history}>
      <div id="container">
        <div className="main--content">
          {/*Nav goes here*/}
          <Nav />
          <div className="spacer" />
          {/*Content goes here*/}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </div>
        {/*Footer goes here*/}
      </div>
    </Router>
  );
};

export default Main;

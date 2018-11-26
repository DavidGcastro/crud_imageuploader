import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Main = () => {
  return (
    <Router>
      <div id="container">
        <div className="main--content">
          {/*Nav goes here*/}
          <div className="spacer" />
          {/*Content goes here*/}
        </div>
        {/*Footer goes here*/}
      </div>
    </Router>
  );
};

export default Main;

import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="nav">
      <div className="wrapper nav--container">
        <div className="nav--logo--container">
          <Link className="text--large--bold link nav--logo" to="/">
            HINGE
          </Link>
        </div>
        <div className="nav--links">
          <Link className="link" to="/login">
            Log In
          </Link>
          <Link className="link" to="/signup">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;

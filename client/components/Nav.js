import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="nav--parent wrapper">
      <span className="title--large--light logo">Sploreguide</span>
      <div className="nav--links">
        <Link className="text--reg" to="/login">
          Log In
        </Link>
        <Link className="text--reg" to="/signup">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Nav;

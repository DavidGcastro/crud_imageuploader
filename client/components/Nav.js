import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOutUserAsync } from '../redux/reducers/user';

const Nav = props => {
  let { userLoggedIn, logout } = props;
  return (
    <div className="nav">
      <div className="wrapper nav--container">
        <div className="nav--logo--container">
          <Link className="text--large--bold link nav--logo" to="/">
            HINGE
          </Link>
        </div>
        {props.userLoggedIn ? (
          <div className="nav--links">
            <Link className="link" to="/profile">
              Profile
            </Link>
            <a href="#" className="link" onClick={logout}>
              Log Out
            </a>
          </div>
        ) : (
          <div className="nav--links">
            <Link className="link" to="/login">
              Log In
            </Link>
            <Link className="link" to="/signup">
              Sign up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { user: state.userReducer.user };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logOutUserAsync())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);

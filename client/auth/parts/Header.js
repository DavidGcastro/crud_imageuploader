import React from 'react';
import { connect } from 'react-redux';

const Header = props => {
  let { user } = props;
  console.log(user);
  return (
    <div className="profile--header">
      <span className="text--large--light">
        Hello, <span className="underline">{user.firstName}!</span>
      </span>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.userReducer.user
  };
};
export default connect(mapStateToProps)(Header);

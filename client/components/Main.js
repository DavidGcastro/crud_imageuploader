import React from 'react';
import Nav from './Nav';
import Login from '../containers/Login';
import Signup from '../containers/Signup';
import Profile from '../auth/Profile';
import Home from './Home';
import { Router, Route, Switch } from 'react-router-dom';
import { setUserAsync } from '../redux/reducers/user';
import { getQuestionsAsync } from '../redux/reducers/questions';
import history from '../history';
import { connect } from 'react-redux';

class Main extends React.Component {
  componentDidMount() {
    this.props.setUserAsync();
    this.props.getQuestionsAsync();
  }
  render() {
    let userLoggedIn = this.props.user ? true : false;
    return (
      <Router history={history}>
        <div id="container">
          <div className="main--content">
            <Nav userLoggedIn={userLoggedIn} />

            {/*Content goes here*/}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              {userLoggedIn && (
                <Switch>
                  {/* Routes placed here are only available after logging in */}
                  <Route path="/profile" component={Profile} />
                </Switch>
              )}
            </Switch>
          </div>
          {/*Footer goes here*/}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUserAsync: () => dispatch(setUserAsync()),
    getQuestionsAsync: () => dispatch(getQuestionsAsync())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

import React, { Component } from 'react';
import MyForm from '../components/MyForm';
import { connect } from 'react-redux';
import { loginUserAsync } from '../redux/reducers/user';

class Login extends Component {
  constructor(props) {
    super();
    this.state = {
      email: '',
      password: '',
      errorMessage: '',
      loggedIn: false
    };
  }

  handleClick = e => {
    e.preventDefault();
    let inputTextData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUserAsync(inputTextData);
  };

  render() {
    return (
      <MyForm
        salutation="Welcome"
        salutation2="Back."
        message="Enter the email address associated with your account, and we’ll send a magic link to your inbox.">
        <form className="form--wrapper">
          <div className="input--section">
            <label className="text--reg input--label">Your Email</label>
            <input
              onChange={event =>
                this.setState({
                  email: event.target.value
                })
              }
              type="text"
            />
          </div>
          <div className="input--section">
            <label className="text--reg input--label">Password</label>
            <input
              autoComplete="on"
              onChange={event =>
                this.setState({
                  password: event.target.value
                })
              }
              type="password"
            />
          </div>
          <span className="text--danger">{this.state.errorMessage}</span>
          <input
            onClick={this.handleClick}
            type="submit"
            className="button--action"
            style={{ marginTop: 25, padding: 3 }}
          />
        </form>
      </MyForm>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUserAsync: data => dispatch(loginUserAsync(data))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Login);

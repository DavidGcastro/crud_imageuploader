import React, { Component } from 'react';
import MyForm from '../components/MyForm';

export default class Signup extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      errorMessage: ''
    };
  }

  handleClick = e => {
    e.preventDefault();
    let { firstName, lastName, email, password } = this.state;
    let data = { firstName, lastName, email, password };
    let { createUser } = this.props;
    createUser(data);
  };

  render() {
    return (
      <MyForm
        salutation="Hey"
        salutation2="There!"
        message="Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.">
        <form className="form--wrapper">
          <div className="input--inline">
            <div className="input--section">
              <label className="text--reg input--label">First Name</label>
              <input
                onChange={event =>
                  this.setState({
                    firstName: event.target.value
                  })
                }
                type="text"
              />
            </div>
            <div className="input--section">
              <label className="text--reg input--label">Last Name</label>
              <input
                onChange={event =>
                  this.setState({
                    lastName: event.target.value
                  })
                }
                type="text"
              />
            </div>
          </div>
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

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getQuestionsAndAnswersAsync } from '../redux/reducers/user';

class Profile extends Component {
  componentDidMount() {
    this.props.getQAndA();
  }
  render() {
    return <h1>Hello World</h1>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getQAndA: data => dispatch(getQuestionsAndAnswersAsync())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Profile);

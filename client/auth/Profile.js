import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getQuestionsAndAnswersAsync } from '../redux/reducers/user';

class Profile extends Component {
  componentDidMount() {
    this.props.getQAndA();
  }
  render() {
    let { QandA, user } = this.props;
    console.log(QandA, user);
    return <h1>Hello World</h1>;
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    QandA: state.userReducer.questionsAndAnswers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getQAndA: () => dispatch(getQuestionsAndAnswersAsync())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getQuestionsAndAnswersAsync,
  deleteAnswerAsync,
  addAnswerAsync
} from '../redux/reducers/user';
import { addPhotoAsync } from '../redux/reducers/photos';
import Header from './parts/Header';
import Questions from './parts/Questions';
import Answers from './parts/Answers';
import Photos from './parts/Photos';
import UserPhotos from './parts/UserPhotos';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      questionSelected: null,
      answerGiven: ''
    };
  }

  componentDidMount() {
    this.props.getQAndA();
  }
  render() {
    return (
      <div className="parentFlexer wrapper">
        <div className="profile innerPadding">
          <Header />
          <div className="profile--split">
            <Questions />
            <Answers />
          </div>
          <div className="profile--split">
            <Photos />
            <UserPhotos />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    QandA: state.userReducer.questionsAndAnswers,
    questions: state.questionsReducer.questions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getQAndA: () => dispatch(getQuestionsAndAnswersAsync()),
    deleteAnswer: id => dispatch(deleteAnswerAsync(id)),
    addPhoto: (photo, id) => dispatch(addPhotoAsync(photo, id)),
    addAnswer: data => dispatch(addAnswerAsync(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);

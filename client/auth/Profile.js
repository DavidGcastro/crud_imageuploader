import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getQuestionsAndAnswersAsync,
  deleteAnswerAsync,
  addAnswerAsync
} from '../redux/reducers/user';
import { setPhotoAsync } from '../redux/reducers/photos';
import Header from './parts/Header';
import Questions from './parts/Questions';
import Answers from './parts/Answers';
import Photos from './parts/Photos';
import UserPhotos from './parts/UserPhotos';

class Profile extends Component {
  componentDidMount() {
    this.props.getQAndA();
    this.props.getPhotos();
  }
  render() {
    return (
      <div className="parentFlexer wrapper">
        <div className="profile padder">
          <Header />
          <div className="profile--split divider">
            <Questions />
            <Answers />
          </div>
          <div className="profile--split divider">
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
    user: state.userReducer.user.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getQAndA: () => dispatch(getQuestionsAndAnswersAsync()),
    getPhotos: () => dispatch(setPhotoAsync())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);

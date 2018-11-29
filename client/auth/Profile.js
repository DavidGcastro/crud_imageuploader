import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getQuestionsAndAnswersAsync,
  deleteAnswerAsync,
  addAnswerAsync
} from '../redux/reducers/user';
import { addPhotoAsync } from '../redux/reducers/photos';

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

  handleAnswer = e => {
    let answer = e.target.value;
    this.setState({ answerGiven: answer });
  };

  selectQuestion = e => {
    let q = e.target.value;
    q = Number(q);
    this.setState({ questionSelected: q });
  };

  handleDeleteAnswer = e => {
    let answerId = e.target.value;
    this.props.deleteAnswer(answerId);
  };

  photoSelectedHandler = e => {
    let photo = e.target.files[0];
    this.props.addPhoto(photo, this.props.user.id);
  };

  handleAnswerQuestion = () => {
    let user = this.props.user.id;
    let { questionSelected, answerGiven } = this.state;
    let data = { questionSelected, answerGiven, user };
    this.props.addAnswer(data);
  };
  render() {
    let { QandA, user, questions } = this.props;
    return (
      <div className="parentFlexer wrapper">
        <div className="profile innerPadding">
          <span className="text--large--light">Hello, {user.firstName}</span>
          <div className="profile--questions">
            <select onChange={this.selectQuestion} style={{ marginBottom: 10 }}>
              {questions &&
                questions.map(x => {
                  return (
                    <option key={x.id} value={x.id}>
                      {x.question}
                    </option>
                  );
                })}
            </select>
            <input
              onChange={this.handleAnswer}
              type="text"
              placeholder="Please Select a Question"
              disabled={!this.state.questionSelected ? true : false}
            />
            <input
              onClick={this.handleAnswerQuestion}
              className="button--submit"
              type="button"
              value="SELECT QUESTION"
            />
          </div>
          <div>
            {QandA && QandA.length ? (
              QandA.map(x => {
                return (
                  <div key={x.id} style={{ marginBottom: 10, marginTop: 10 }}>
                    <span className="text--reg--bold underline">
                      {x.question.question}
                    </span>

                    <span className="text--reg" style={{ marginTop: 5 }}>
                      {x.response}
                    </span>
                  </div>
                );
              })
            ) : (
              <div>
                <span className="text--reg">No Answers yet.</span>
              </div>
            )}
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

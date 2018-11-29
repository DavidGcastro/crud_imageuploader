import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAnswerAsync } from '../../redux/reducers/user';

class Questions extends Component {
  state = {
    questionSelected: '',
    answerGiven: '',
    questionCounter: 0,
    error: ''
  };

  handleAnswer = event => {
    let answer = event.target.value;
    this.setState({ answerGiven: answer });
  };

  handleAnswerQuestion = () => {
    let user = this.props.user.id;
    let { questionSelected, answerGiven } = this.state;
    let data = { questionSelected, answerGiven, user };
    this.setState({
      questionSelected: '',
      answerGiven: '',
      questionCounter: this.state.questionCounter + 1
    });

    if (this.state.questionCounter >= 3) {
      this.setState({
        error: 'Max three questions.'
      });
      return;
    }
    this.props.addAnswer(data);
  };

  selectQuestion = event => {
    let q = event.target.value;
    q = Number(q);
    this.setState({ questionSelected: q });
  };

  render() {
    let { questions } = this.props;
    return (
      <div className="profile--questions">
        <span className="text--large--light underline">Questions</span>
        <select
          className="input--selector"
          onChange={this.selectQuestion}
          style={{ marginBottom: 10 }}>
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
        <span className="text--reg" style={{ color: 'red', padding:20 }}>
          {this.state.error}
        </span>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    questions: state.questionsReducer.questions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addAnswer: data => dispatch(addAnswerAsync(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Questions);

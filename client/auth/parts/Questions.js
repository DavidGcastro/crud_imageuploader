import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAnswerAsync } from '../../redux/reducers/user';

class Questions extends Component {
  state = {
    questionSelected: 1,
    answerGiven: '',
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
    let { questionsSelectedArr } = this.props;
    if (questionsSelectedArr.length >= 3) {
      this.setState({
        error: 'Max three questions.'
      });
      return;
    }

    this.setState({
      answerGiven: '',
      error: ''
    });
    this.props.addAnswer(data);
  };

  selectQuestion = event => {
    let q = event.target.value;
    q = Number(q);
    this.setState({ questionSelected: q });
  };

  render() {
    let { questions, questionsSelectedArr } = this.props;

    return (
      <div className="profile--questions">
        <span className="text--large--light underline">Questions</span>
        <select
          className="input--selector"
          onChange={this.selectQuestion}
          style={{ marginBottom: 10, padding: 3 }}>
          {questions &&
            questions.map(x => {
              if (!questionsSelectedArr.includes(x.id)) {
                return (
                  <option key={x.id} value={x.id}>
                    {x.question}
                  </option>
                );
              }
            })}
        </select>
        <input
          style={{ padding: 5 }}
          onChange={this.handleAnswer}
          type="text"
          value={this.state.answerGiven}
          placeholder="Please Select a Question"
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
          <input
            style={{ padding: 5, flex: 1 }}
            onClick={this.handleAnswerQuestion}
            className="button--submit"
            type="button"
            value="SUBMIT ANSWER"
          />
          <span className="text--reg" style={{ color: 'red', flex: 1 }}>
            {this.state.error}
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    questions: state.questionsReducer.questions,
    QandA: state.userReducer.questionsAndAnswers,
    questionsSelectedArr: state.questionsReducer.questionsSelected
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

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteAnswerAsync } from '../../redux/reducers/user';
class Answers extends Component {
  render() {
    let { QandA } = this.props;
    return (
      <div className="profile--answers">
        {QandA && QandA.length ? (
          QandA.map(x => {
            return (
              <div
                key={x.id}
                style={{ marginBottom: 10 }}
                className="profile--answerContainer">
                <span className="text--reg--bold">{x.question.question}</span>
                <span className="text--reg" style={{ marginTop: 10 }}>
                  {x.response}
                </span>
                <input
                  type="button"
                  className="button--close profile--buttonPlacement"
                  value="x"
                />
              </div>
            );
          })
        ) : (
          <div>
            <span className="text--reg">No Answers yet.</span>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    QandA: state.userReducer.questionsAndAnswers
  };
};
const mapDispatchToProps = dispatch => {
  return {
    deleteAnswer: id => dispatch(deleteAnswerAsync(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Answers);

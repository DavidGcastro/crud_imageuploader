import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getQuestionsAndAnswersAsync } from '../../redux/reducers/user';
class Answers extends Component {
  render() {
    let { QandA } = this.props;
    return (
      <div className="profile--answers">
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
    );
  }
}

const mapStateToProps = state => {
  return {
    QandA: state.userReducer.questionsAndAnswers
  };
};

export default connect(mapStateToProps)(Answers);

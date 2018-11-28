import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getQuestionsAndAnswersAsync,
  deleteAnswerAsync
} from '../redux/reducers/user';

class Profile extends Component {
  componentDidMount() {
    this.props.getQAndA();
  }
  handleDelete = e => {
    let answerId = e.target.value;
    this.props.deleteAnswer(answerId);
  };
  render() {
    let { QandA, user, questions } = this.props;
    return (
      <div className="parentFlexer wrapper">
        <div className="profile innerPadding">
          <div className="profile--header">
            <span className="text--large--bold underline">
              {user.firstName}
            </span>
          </div>
          <div className="profile--content">
            <span className="text--large--light underine">My Photos</span>
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
    deleteAnswer: id => dispatch(deleteAnswerAsync(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);

// <div className="profile--split">
//   <div className="profile--questions">
//     {QandA && QandA.length ? (
//       QandA.map(x => {
//         return (
//           <div key={x.id} style={{ marginBottom: 10, marginTop: 10 }}>
//             <span className="text--reg--bold underline">
//               {x.question.question}
//             </span>
//             <input
//               onClick={this.handleDelete}
//               className="button--submit"
//               type="button"
//               value={x.id}
//             />
//             <span className="text--reg" style={{ marginTop: 5 }}>
//               {x.response}
//             </span>
//           </div>
//         );
//       })
//     ) : (
//         <div>
//           <span className="text--reg">No Answers yet.</span>
//           <input
//             value="Add Question"
//             type="submit"
//             className="button--action"
//             style={{ marginTop: 25, padding: 3 }}
//           />
//         </div>
//       )}
//   </div>

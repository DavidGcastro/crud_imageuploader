import axios from 'axios';
const GET_QUESTIONS = 'GET_QUESTIONS';

const setQuestions = questions => ({ type: GET_QUESTIONS, questions });

export const getQuestionsAsync = () => dispatch =>
  axios
    .get('/api/questions')
    .then(qs => dispatch(setQuestions(qs.data)))
    .catch(err => console.log(err));

/* REDUCER */
export default function(initialState = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return { ...initialState, questions: action.questions };

    default:
      return initialState;
  }
}

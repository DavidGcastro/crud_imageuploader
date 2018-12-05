import axios from 'axios';
const GET_QUESTIONS = 'GET_QUESTIONS';
const QUESTIONS_SELECTED = 'QUESTIONS_SELECTED';

const setQuestions = questions => ({ type: GET_QUESTIONS, questions });

export const questionsSelected = arr => ({
  type: QUESTIONS_SELECTED,
  questionsSelected: arr
});

export const getQuestionsAsync = () => dispatch =>
  axios
    .get('/api/questions')
    .then(qs => dispatch(setQuestions(qs.data)))
    .catch(err => console.log(err));

/* REDUCER */
export default function(initialState = { questionsSelected: [] }, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return { ...initialState, questions: action.questions };
    case QUESTIONS_SELECTED:
      return {
        ...initialState,
        questionsSelected: action.questionsSelected
      };

    default:
      return initialState;
  }
}

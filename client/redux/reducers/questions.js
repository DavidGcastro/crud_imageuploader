import axios from 'axios';
const GET_QUESTIONS = 'GET_QUESTIONS';
const QUESTIONS_SELECTED = 'QUESTIONS_SELECTED';
const REMOVE_QUESTION = 'REMOVE_QUESTION';

const setQuestions = questions => ({ type: GET_QUESTIONS, questions });

export const questionsSelected = arr => ({
  type: QUESTIONS_SELECTED,
  questionsSelected: arr
});

export const removeQuestion = removeId => ({
  type: REMOVE_QUESTION,
  id: removeId
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

    case REMOVE_QUESTION: {
      return {
        ...initialState,
        questionsSelected: initialState.questionsSelected.filter(
          x => x === action.id
        )
      };
    }

    default:
      return initialState;
  }
}

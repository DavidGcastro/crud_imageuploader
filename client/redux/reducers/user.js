import axios from 'axios';
import history from '../../history';
const SET_USER = 'SET_USER';
const CREATE_USER = 'CREATE_USER';
const LOG_OUT = 'LOG_OUT';
const SET_QUESTIONS_AND_ANSWERS = 'SET_QUESTIONS_AND_ANSWERS';
const ADD_ANSWER = 'ADD_ANSWER';
/* ACTION CREATORS */
const setUser = user => ({ type: SET_USER, user });
const logoutUser = () => ({ type: LOG_OUT });
const setUserQuestionsAndAnswers = qa => ({
  type: SET_QUESTIONS_AND_ANSWERS,
  questionsAndAnswers: qa
});

/* THUNKS CREATORS*/
/**************************************************************************/

export const loginUserAsync = data => dispatch => {
  let { email, password } = data;
  axios
    .post('/auth/login', {
      email,
      password
    })
    .then(response => {
      let user = response.data.user;
      dispatch(setUser(user));
      return response;
    })
    .then(x => {
      history.push('/profile');
    })
    .catch(error => {
      console.error(error);
    });
};

export const getQuestionsAndAnswersAsync = () => (dispatch, getState) => {
  let userId = getState().userReducer.user.id;
  axios
    .get(`/api/answers/${userId}`)
    .then(qa => dispatch(setUserQuestionsAndAnswers(qa.data)))
    .catch(err => console.log(err));
};

export const deleteAnswerAsync = id => dispatch => {
  console.log('in reducer', id);
  axios
    .delete(`/api/answers/${id}`)
    .then(() => dispatch(getQuestionsAndAnswersAsync()))
    .catch(err => console.log(err));
};

export const setUserAsync = () => dispatch =>
  axios
    .get('/auth/me')
    .then(me => {
      dispatch(setUser(me.data));
      return me.data;
    })
    .then(user =>
      axios
        .get(`/api/answers/${user.id}`)
        .then(qa => dispatch(setUserQuestionsAndAnswers(qa.data)))
        .catch(err => console.log(err))
    )
    .catch(err => console.log(err));

export const createUserAsync = data => dispatch => {
  let { firstName, lastName, email, password } = data;
  axios
    .post('/auth/signup', { firstName, lastName, email, password })
    .then(res => {
      let user = res.data.user;
      dispatch(setUser(user));
      return res;
    })
    .then(x => {
      history.push('/profile');
    });
};

export const addAnswerAsync = data => dispatch => {
  let { questionSelected, answerGiven, user } = data;

  axios
    .post('api/users/answer', { questionSelected, answerGiven, user })
    .then(() => dispatch(getQuestionsAndAnswersAsync()))
    .catch(err => console.log(err));
};

export const logOutUserAsync = () => dispatch => {
  axios
    .get('/auth/logout')
    .then(() => dispatch(logoutUser()))
    .then(() => history.push('/'))
    .catch(err => console.log(err));
};

/**************************************************************************/

/* REDUCER */
export default function(initialState = {}, action) {
  switch (action.type) {
    case SET_USER:
      return { ...initialState, user: action.user };
    case LOG_OUT:
      return { ...initialState, user: false };
    case CREATE_USER:
      return { ...initialState, user: action.newUser };
    case SET_QUESTIONS_AND_ANSWERS:
      return {
        ...initialState,
        questionsAndAnswers: action.questionsAndAnswers
      };
    default:
      return initialState;
  }
}

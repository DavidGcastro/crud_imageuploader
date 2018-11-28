import axios from 'axios';
import history from '../../history';
const SET_USER = 'SET_USER';
const CREATE_USER = 'CREATE_USER';
const LOG_OUT = 'LOG_OUT';
const GET_ANSWERS = 'GET_ANSWERS';
const CHECK_USER = 'CHECK_USER';
/* ACTION CREATORS */
const setUser = user => ({ type: SET_USER, user });

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
      let userId = response.data.user.id;
      dispatch(setUser(userId));
      return response;
    })
    .then(x => {
      if (x.data.redirectUrl) {
        history.push('/profile');
      }
    })
    .catch(error => {
      console.error(error);
    });
};

export const createUserAsync = data => dispatch => {
  let { firstName, lastName, email, password } = data;
  axios
    .post('/auth/signup', { firstName, lastName, email, password })
    .then(res => {
      let userId = res.data.user.id;
      dispatch(setUser(userId));
      return res;
    })
    .then(x => {
      if (x.data.redirectUrl) {
        history.push('/profile');
      }
    });
};

/**************************************************************************/

/* REDUCER */
export default function x(initialState = {}, action) {
  switch (action.type) {
    case SET_USER:
      return { ...initialState, user: action.user };
    case LOG_OUT:
      return { ...initialState, user: false };
    case CREATE_USER:
      return { ...initialState, user: action.newUser };
    default:
      return initialState;
  }
}

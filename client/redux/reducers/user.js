import axios from 'axios';
import history from '../../history';
const SET_USER = 'SET_USER';
const CREATE_USER = 'CREATE_USER';
const LOG_OUT = 'LOG_OUT';
const GET_ANSWERS = 'GET_ANSWERS';
const CHECK_USER = 'CHECK_USER';
/* ACTION CREATORS */
const setUser = user => ({ type: SET_USER, user });
const logoutUser = () => ({ type: LOG_OUT });

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
      if (x.data.redirectUrl) {
        history.push('/profile');
      }
    })
    .catch(error => {
      console.error(error);
    });
};

export const setUserAsync = () => dispatch =>
  axios
    .get('/auth/me')
    .then(me => dispatch(setUser(me.data)))
    .catch(err => console.log(err));

export const createUserAsync = data => dispatch => {
  let { firstName, lastName, email, password } = data;
  axios
    .post('/auth/signup', { firstName, lastName, email, password })
    .then(res => {
      let user = res.data.user.id;
      dispatch(setUser(user));
      return res;
    })
    .then(x => {
      if (x.data.redirectUrl) {
        history.push('/profile');
      }
    });
};

export const logOutUserAsync = () => dispatch => {
  axios
    .get('/auth/logout')
    .then(() => dispatch(logoutUser()))
    .then(() => (window.location.href = '/'))
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
    default:
      return initialState;
  }
}

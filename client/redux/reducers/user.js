import axios from 'axios';
const LOGIN_USER = 'LOGIN_USER';
const CREATE_USER = 'CREATE_USER';
const LOG_OUT = 'LOG_OUT';
const GET_ANSWERS = 'GET_ANSWERS';
const CHECK_USER = 'CHECK_USER';

/* ACTION CREATORS */
const loginUser = user => ({ type: LOGIN_USER, user });

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
      dispatch(loginUser(userId));
      if (response.data.redirectUrl) {
        window.location.href = response.data.redirectUrl;
      }
    })
    .catch(error => {
      console.error(error);
    });
};

/**************************************************************************/

/* REDUCER */
export default function(initialState = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...initialState, user: action.user };
    case LOG_OUT:
      return { ...initialState, user: false };
    case CREATE_USER:
      return { ...initialState, user: action.newUser };
    default:
      return initialState;
  }
}

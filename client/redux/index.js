import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import userReducer from './reducers/user';
import questionsReducer from './reducers/questions';
import photoReducer from './reducers/photos';

const reducer = combineReducers({
  userReducer,
  questionsReducer,
  photoReducer
});

const middleware = applyMiddleware(
  thunkMiddleware,
  createLogger({ collapsed: true })
);

const store = createStore(reducer, middleware);

export default store;

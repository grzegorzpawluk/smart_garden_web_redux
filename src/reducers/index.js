import loggedReducer from './isLogged.js';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  isLogged: loggedReducer,
});

export default allReducers;

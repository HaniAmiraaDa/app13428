// reducers.js
import { combineReducers } from 'redux';
import { SET_NAME, SET_EMAIL, SET_MESSAGE } from './Pages/actions';

const nameReducer = (state = '', action) => {
  switch (action.type) {
    case SET_NAME:
      return action.payload;
    default:
      return state;
  }
};

const emailReducer = (state = '', action) => {
  switch (action.type) {
    case SET_EMAIL:
      return action.payload;
    default:
      return state;
  }
};

const messageReducer = (state = '', action) => {
  switch (action.type) {
    case SET_MESSAGE:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  name: nameReducer,
  email: emailReducer,
  message: messageReducer,
});

export default rootReducer;

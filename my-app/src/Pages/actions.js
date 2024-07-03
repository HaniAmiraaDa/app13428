// actions.js
export const SET_NAME = 'SET_NAME';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_MESSAGE = 'SET_MESSAGE';

export const setName = (name) => ({
  type: SET_NAME,
  payload: name,
});

export const setEmail = (email) => ({
  type: SET_EMAIL,
  payload: email,
});

export const setMessage = (message) => ({
  type: SET_MESSAGE,
  payload: message,
});

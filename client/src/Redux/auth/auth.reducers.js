// authReducer.js
const initialState = {
  role: '',
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        role: action.payload,
        error: null,
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        role: '',
        error: action.payload,
      };
    default:
      return state;
  }
};


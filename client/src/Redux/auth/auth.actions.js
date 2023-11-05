// authActions.js
export const loginSuccess = (role) => {
    return {
      type: 'LOGIN_SUCCESS',
      payload: role,
    };
  };
  
  export const loginFailure = (error) => {
    return {
      type: 'LOGIN_FAILURE',
      payload: error,
    };
  };
  
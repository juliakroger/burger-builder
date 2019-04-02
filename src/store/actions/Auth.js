import * as act from './actionTypes';


export const authStart = () => {
  return {
    type: act.AUTH_START
  };
};

export const authSucess = (authData) => {
  return {
    type: act.AUTH_SUCESS,
    authData: authData
  };
};

export const authFail = (error) => {
  return {
    type: act.AUTH_FAIL,
    error: error
  };
};

export const auth = (email, password) => {
  return dispatch => {
    dispatch(authStart());
  }
}
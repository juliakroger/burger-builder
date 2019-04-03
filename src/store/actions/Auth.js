import * as act from './actionTypes';
import axios from 'axios';

export const sigupStart = () => {
  return {
    type: act.SIGNUP_START
  };
};

export const siginStart = () => {
  return {
    type: act.SIGNIN_START
  };
};

export const logout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('expirationDate')
  return {
    type: act.AUTH_LOGOUT
  };
};

export const checkoutTimeOut = (timeOut) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, timeOut * 1000);
  }
};

export const authSucess = (authData) => {
  return {
    type: act.AUTH_SUCESS,
    idToken: authData.idToken,
    userId: authData.localId
  };
};

export const authFail = (error) => {
  return {
    type: act.AUTH_FAIL,
    error: error.response.data.error.message
  };
};

export const signUp = (email, password) => {
  return dispatch => {
    dispatch(sigupStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    };
    axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCqSumm0IiFJyygXYm3dFrUZnwjfjdELu4', authData)
        .then(response => dispatch(authSucess(response.data)))
        .catch(error => dispatch( authFail(error) ));
  };
};

export const signIn = (email, password) => {
  return dispatch => {
    dispatch(siginStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    };
    axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCqSumm0IiFJyygXYm3dFrUZnwjfjdELu4', authData)
        .then(response => {
          dispatch(authSucess(response.data))
          const expirationDate = new Date( new Date().getTime() + response.data.expiresIn * 1000);
          localStorage.setItem('token', response.data.idToken)
          localStorage.setItem('expirationDate', expirationDate)
          dispatch(checkoutTimeOut(response.data.expiresIn))
        })
        .catch(error => dispatch(authFail(error)))
  };
};
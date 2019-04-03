import * as act from '../actions/actionTypes';

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false
}
const reducer = (state=initialState, action) => {
  switch (action.type) {
    case act.SIGNUP_START:
      return {
        ...state,
        loading: true,
        error: null
      }

    case act.SIGNIN_START:
      return {
        ...state,
        loading: true,
        error: null
      }

    case act.AUTH_SUCESS:
      return {
        ...state,
        token: action.idToken,
        userId: action.userId,
        loading: false
      }

    case act.AUTH_FAIL:
      return {
        ...initialState,
        error: action.error,
      }

    case act.AUTH_LOGOUT:
      return initialState;

    default:
      return state;
  }
}



export default reducer;
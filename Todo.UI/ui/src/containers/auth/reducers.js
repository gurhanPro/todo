import * as types from '../../utils/actionTypes';

export const initialState = {
  loggedinUser: null,
  loginError: null,
  loginLoader: false,

  registeredUser: null,
  registerError: null,
  registerLoader: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
        return { ...state, loginLoader: true, loginError: null };

    case types.LOGIN_SUCCESS:
        return { ...state, loggedinUser: action.payload, loginLoader: false };

    case types.LOGIN_FAILED:
      return { ...state, loginLoader: false, loginError: action.payload };


    case types.REGISTER_REQUEST:
        return { ...state, registerLoader: true, registerError: null, card: null };

    case types.REGISTER_SUCCESS:
        return { ...state, registeredUser: 'success fully registed, now login', registerLoader: false };

    case types.REGISTER_FAILED:
        return { ...state, registerLoader: false, registerError: action.payload };

    case types.LOGOUT_REQUEST:
        return { ...state };

    default:
      return state;
  }
}
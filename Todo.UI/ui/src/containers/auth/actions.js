import * as types from '../../utils/actionTypes';

export function registerRequest(user) {
    return {
      type: types.REGISTER_REQUEST,
      payload: user
    };
  }
  
  export function registerSuccess(user) {
    return {
      type: types.REGISTER_SUCCESS,
      payload: user,
    };
  }
  
  export function registerFail(error) {
    return {
      type: types.REGISTER_FAILED,
      payload: error,
    };
  }


export function loginRequest(user) {
  return {
    type: types.LOGIN_REQUEST,
    payload: user,
  };
}

export function loginSuccess(user) {
  return {
    type: types.LOGIN_SUCCESS,
    payload: user,
  };
}

export function loginFail(error) {
  return {
    type: types.LOGIN_FAILED,
    payload: error,
  };
}

export function logout() {
  return {
    type: types.LOGOUT_REQUEST,
  };
}
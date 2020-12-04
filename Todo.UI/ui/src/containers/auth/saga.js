import { login, register } from "../../utils/requests";
import { take, call, put } from "redux-saga/effects";
import * as actions from "./actions"
import * as actionTypes from "../../utils/actionTypes"

export function* loginRequestWatcher() {
    while (true) {
      const { payload } = yield take(actionTypes.LOGIN_REQUEST)
      try {
        const response = yield call(login, payload);
        yield put(actions.loginSuccess(response.data));
      } catch (e) {
        yield put(actions.loginFail(e.response.data));
      }
    }
  }

  export function* registerRequestWatcher() {
    while (true) {
      const { payload } = yield take(actionTypes.REGISTER_REQUEST)
      try {
        const response = yield call(register, payload);
        yield put(actions.registerSuccess(response.data));
      } catch (e) {
        yield put(actions.registerFail(e.response.data));
      }
    }
  }
import * as requests from "../../utils/requests";
import { take, call, put } from "redux-saga/effects";
import * as actions from "./actions"
import * as actionTypes from "../../utils/actionTypes"

export function* getAllTodosRequestWatcher() {
    while (true) {
      const { payload } = yield take(actionTypes.GET_ALL_TODOS_REQUEST)
      try {
        const response = yield call(requests.getAllTodos, payload);
        yield put(actions.getAllTodosSuccess(response.data));
      } catch (e) {
        yield put(actions.getAllTodosFail(e.response.data));
      }
    }
  }

  export function* addTodoRequestWatcher() {
    while (true) {
      const { payload } = yield take(actionTypes.ADD_TODO_REQUEST)
      try {
        const response = yield call(requests.addTodo, payload);
        yield put(actions.addTodoSuccess(response.data));
        yield put(actions.getAllTodosRequest());
      } catch (e) {
        yield put(actions.addTodoFail(e.response.data));
      }
    }
  }


  export function* editTodoRequestWatcher() {
    while (true) {
      const { payload } = yield take(actionTypes.EDIT_TODO_REQUEST)
      try {
        const response = yield call(requests.editTodo, payload);
        yield put(actions.editTodoSuccess(response.data));
        yield put(actions.getAllTodosRequest());
      } catch (e) {
        yield put(actions.editTodoFail(e.response.data));
      }
    }
  }

  export function* toggleComplereForTodoRequestWatcher() {
    while (true) {
      const { payload } = yield take(actionTypes.TOGGLE_COMPLETE_FOR_TODO_REQUEST)
      try {
        const response = yield call(requests.toggleCompleteForTodo, payload);
        yield put(actions.toggleCompleteForTodoSuccess(response.data));
        yield put(actions.getAllTodosRequest());
      } catch (e) {
        yield put(actions.toggleCompleteForTodoFail(e.response.data));
      }
    }
  }

  export function* deleteTodoRequestWatcher() {
    while (true) {
      const { payload } = yield take(actionTypes.DELETE_TODO_REQUEST)
      try {
        const response = yield call(requests.deleteTodo, payload);
        yield put(actions.deleteTodoSuccess(response.data));
        yield put(actions.getAllTodosRequest());
      } catch (e) {
        yield put(actions.deleteTodoFail(e.response.data));
      }
    }
  }


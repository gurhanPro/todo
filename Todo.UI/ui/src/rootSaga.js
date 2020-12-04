import { fork, all } from "redux-saga/effects";
import { registerRequestWatcher, loginRequestWatcher } from "./containers/auth/saga";
import { getAllTodosRequestWatcher, addTodoRequestWatcher, editTodoRequestWatcher, toggleComplereForTodoRequestWatcher, deleteTodoRequestWatcher } from "./containers/todos/saga";

export default function* rootsaga() {
    yield all([
        fork(loginRequestWatcher),
        fork(registerRequestWatcher),
        fork(getAllTodosRequestWatcher),
        fork(addTodoRequestWatcher),
        fork(editTodoRequestWatcher),
        fork(toggleComplereForTodoRequestWatcher),
        fork(deleteTodoRequestWatcher),
    ]);
}
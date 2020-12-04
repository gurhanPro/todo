import { fork, all } from "redux-saga/effects";
import { registerRequestWatcher, loginRequestWatcher } from "./containers/auth/saga";

export default function* rootsaga() {
    yield all([
        fork(loginRequestWatcher),
        fork(registerRequestWatcher),
    ]);
}
import { createStore, applyMiddleware, compose } from "redux";
import createReducers from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import rootsaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  createReducers(),
  composeEnhancers(
    applyMiddleware(sagaMiddleware),
  )
);

sagaMiddleware.run(rootsaga);
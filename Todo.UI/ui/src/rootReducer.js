import { combineReducers } from 'redux'
import { routerReducer } from "react-router-redux";
import authReducer from "./containers/auth/reducers"
import todoReducer from "./containers/todos/reducers"

export default function createReducers(){
    return combineReducers({
        todoState: todoReducer,
        authState: authReducer,
        routing: routerReducer,
    })

}

import { combineReducers } from 'redux'
import { routerReducer } from "react-router-redux";
import authReducer from "./containers/auth/reducers"

export default function createReducers(){
    return combineReducers({
        authState: authReducer,
        routing: routerReducer,
    })

}

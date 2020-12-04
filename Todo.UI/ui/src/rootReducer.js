import { combineReducers } from 'redux'
import { routerReducer } from "react-router-redux";

export default function createReducers(){
    return combineReducers({
        routing: routerReducer,
    })

}

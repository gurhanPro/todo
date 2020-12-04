import * as types from '../../utils/actionTypes';

export function getAllTodosRequest(user) {
    return {
      type: types.GET_ALL_TODOS_REQUEST,
      payload: user
    };
  }
  
  export function getAllTodosSuccess(todos) {
    return {
      type: types.GET_ALL_TODOS_SUCCESS,
      payload: todos,
    };
  }
  
  export function getAllTodosFail(error) {
    return {
      type: types.GET_ALL_TODOS_FAILED,
      payload: error,
    };
  }

  export function addTodoRequest(user) {
    return {
      type: types.ADD_TODO_REQUEST,
      payload: user
    };
  }
  
  export function addTodoSuccess(todos) {
    return {
      type: types.ADD_TODO_SUCCESS,
      payload: todos,
    };
  }
  
  export function addTodoFail(error) {
    return {
      type: types.ADD_TODO_FAILED,
      payload: error,
    };
  }

  export function editTodoRequest(user) {
    return {
      type: types.EDIT_TODO_REQUEST,
      payload: user
    };
  }
  
  export function editTodoSuccess(todos) {
    return {
      type: types.EDIT_TODO_SUCCESS,
      payload: todos,
    };
  }
  
  export function editTodoFail(error) {
    return {
      type: types.EDIT_TODO_FAILED,
      payload: error,
    };
  }

  export function toggleCompleteForTodoRequest(user) {
    return {
      type: types.TOGGLE_COMPLETE_FOR_TODO_REQUEST,
      payload: user
    };
  }
  
  export function toggleCompleteForTodoSuccess(todos) {
    return {
      type: types.TOGGLE_COMPLETE_FOR_TODO_SUCCESS,
      payload: todos,
    };
  }
  
  export function toggleCompleteForTodoFail(error) {
    return {
      type: types.TOGGLE_COMPLETE_FOR_TODO_FAILED,
      payload: error,
    };
  }

  export function deleteTodoRequest(user) {
    return {
      type: types.DELETE_TODO_REQUEST,
      payload: user
    };
  }
  
  export function deleteTodoSuccess(todos) {
    return {
      type: types.DELETE_TODO_SUCCESS,
      payload: todos,
    };
  }
  
  export function deleteTodoFail(error) {
    return {
      type: types.DELETE_TODO_FAILED,
      payload: error,
    };
  }
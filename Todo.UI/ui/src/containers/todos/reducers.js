import * as types from '../../utils/actionTypes';

export const initialState = {
  allTodos: null,
  getAllTodosError: null,
  getAllTodosLoader: false,

  addTodo: null,
  addTodoError: null,
  addTodoLoader: false,

  editTodo: null,
  editTodoError: null,
  editTodoLoader: false,

  toggleCompleteTodo: null,
  toggleCompleteTodoError: null,
  toggleCompleteTodoLoader: false,


  deleteTodo: null,
  deleteTodoError: null,
  deleteTodoLoader: false,

};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_ALL_TODOS_REQUEST:
      return { ...state, getAllTodosLoader: true, getAllTodosError: null };

    case types.GET_ALL_TODOS_SUCCESS:
      return { ...state, allTodos: action.payload, getAllTodosLoader: false };

    case types.GET_ALL_TODOS_FAILED:
      return { ...state, getAllTodosLoader: false, getAllTodosError: action.payload };


    case types.ADD_TODO_REQUEST:
      return { ...state, addTodoLoader: true, addTodoError: null };

    case types.ADD_TODO_SUCCESS:
      return { ...state, addTodo: action.payload, addTodoLoader: false };

    case types.ADD_TODO_FAILED:
      return { ...state, addTodoLoader: false, addTodoError: action.payload };


    case types.EDIT_TODO_REQUEST:
      return { ...state, editTodoLoader: true, editTodoError: null };

    case types.EDIT_TODO_SUCCESS:
      return { ...state, editTodo: action.payload, editTodoLoader: false };

    case types.EDIT_TODO_FAILED:
      return { ...state, editTodoLoader: false, editTodoError: action.payload };


    case types.TOGGLE_COMPLETE_FOR_TODO_REQUEST:
      return { ...state, toggleCompleteTodoLoader: true, toggleCompleteTodoError: null };

    case types.TOGGLE_COMPLETE_FOR_TODO_SUCCESS:
      return { ...state, toggleCompleteTodo: action.payload, toggleCompleteTodoLoader: false };

    case types.TOGGLE_COMPLETE_FOR_TODO_FAILED:
      return { ...state, toggleCompleteTodoLoader: false, toggleCompleteTodoError: action.payload };


    case types.DELETE_TODO_REQUEST:
      return { ...state, deleteTodoLoader: true, deleteTodoError: null };

    case types.DELETE_TODO_SUCCESS:
      return { ...state, deleteTodo: action.payload, deleteTodoLoader: false };

    case types.DELETE_TODO_FAILED:
      return { ...state, deleteTodoLoader: false, deleteTodoError: action.payload };

    default:
      return state;
  }
}
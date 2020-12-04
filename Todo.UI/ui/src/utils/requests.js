import axios from 'axios';
import { getAuthorizationToken } from './utils';

const BASE_URL = 'http://localhost:5000/api/';

const crudeInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });


export function register(user){
     return crudeInstance.post('auth/register', user);
}

export function login(user){
     return crudeInstance.post('auth', user);
}

export function getAllTodos(){
    const token = getAuthorizationToken();
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    return axios.get(BASE_URL+'todos');
}


export function addTodo(todo){
    console.log('req: ', todo);
    
    const token = getAuthorizationToken();
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    return axios.post(BASE_URL+'todos', todo);
}


export function editTodo(todo){
    const token = getAuthorizationToken();
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    return axios.put(BASE_URL+'todos/'+todo.id, todo);
}


export function toggleCompleteForTodo(todo){
    const token = getAuthorizationToken();
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    return axios.put(`${BASE_URL}todos/${todo.id}/IsComplete`, {Value:!todo.isComplete});
}


export function deleteTodo(todo){
    const token = getAuthorizationToken();
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    return axios.delete(`${BASE_URL}todos/${todo.id}`);
}


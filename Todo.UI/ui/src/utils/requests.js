import axios from 'axios';

export function register(user){
    console.log('registering: ' , user);
    
     return axios.post('http://localhost:5000/api/auth/register', user);
}

export function login(user){
     return axios.post('http://localhost:5000/api/auth', user);
}


export function getAllTodos(user){
    return axios.post('http://localhost:5000/api/auth', user);
}


export function addTodo(user){
    return axios.post('http://localhost:5000/api/auth', user);
}


export function editTodo(user){
    return axios.post('http://localhost:5000/api/auth', user);
}


export function toggleCompleteForTodo(user){
    return axios.post('http://localhost:5000/api/auth', user);
}


export function deleteTodo(user){
    return axios.post('http://localhost:5000/api/auth', user);
}


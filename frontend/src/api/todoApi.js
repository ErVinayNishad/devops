import axios from 'axios';
const API_URL='http://localhost:5000/api/todos';

export const getTodo=()=>axios.get(API_URL);
export const addTodo=(todo)=>axios.post(API_URL,todo);
export const deleteTodo =(id)=>axios.delete(`${API_URL}/${id}`);
export const updateTodo=(id,updateTodo)=>axios.put(`${API_URL}/${id}`,updateTodo);

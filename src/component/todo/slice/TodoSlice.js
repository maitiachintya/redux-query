import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl } from '../../../api/Url_API';

const API_URL = baseUrl;
console.log("API:", API_URL);

// Async actions
export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    const response = await axios.get(API_URL);
    console.log("Res Data", response);
    return response.data;
});

export const addTodo = createAsyncThunk('todos/addTodo', async (newTodo) => {
    const response = await axios.post(API_URL, newTodo);
    console.log("Res Data", response);
    return response.data;
});

export const toggleTodo = createAsyncThunk('todos/toggleTodo', async (todo) => {
    const response = await axios.put(`${API_URL}/${todo.id}`, {
        ...todo,
        completed: !todo.completed,
    });
    return response.data;
});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
});

// Slice
const todosSlice = createSlice({
    name: 'todos',
    initialState: { todos: [], status: 'idle', error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.todos = action.payload;
            })
            .addCase(addTodo.fulfilled, (state, action) => {
                state.todos.push(action.payload);
            })
            .addCase(toggleTodo.fulfilled, (state, action) => {
                const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
                if (index !== -1) state.todos[index] = action.payload;
            })
            .addCase(deleteTodo.fulfilled, (state, action) => {
                state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            });
    },
});

export default todosSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../slice/TodoSlice';

const store = configureStore({
    reducer: {
        todos: todosReducer,
    },
});

export default store;

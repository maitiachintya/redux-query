import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos, addTodo, toggleTodo, deleteTodo } from '../slice/TodoSlice';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';

const TodoView = () => {
    const [newTodo, setNewTodo] = useState('');
    const { todos } = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    const handleAddTodo = () => {
        if (newTodo.trim()) {
            dispatch(addTodo({ title: newTodo, completed: false }));
            setNewTodo('');
        }
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h1>Todo List</h1>
            <div style={{ height: 200, width: "50%", backgroundColor: "whitesmoke" }}>
                <TextField
                    type="text"
                    value={newTodo}
                    label="Filled"
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Add a new task"
                />
                <Button variant='contained' onClick={handleAddTodo}>Add</Button>
            </div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} style={{ display: 'flex', alignItems: 'center' }}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => dispatch(toggleTodo(todo))}
                        />
                        <span
                            style={{
                                textDecoration: todo.completed ? 'line-through' : 'none',
                                margin: '0 10px',
                            }}
                        >
                            {todo.title}
                        </span>
                        <Button variant='contained' onClick={() => dispatch(deleteTodo(todo.id))}>Delete</Button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoView;

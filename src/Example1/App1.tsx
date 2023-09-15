import React, { useEffect, useState } from 'react';
import './App.css';
import { NewTodoForm } from './Components/NewTodoForm';
import { addTodo, fetchTodos } from './store/todoSlice';
import { Todolist } from './Components/Todolist';
import { useAppDispatch, useAppSelector } from './hook';

export type ToDoType = {
    id: string
    title: string
    completed: boolean
}

function App1() {
    const [text, setText] = useState('')
    const dispatch = useAppDispatch()
    const { error, status } = useAppSelector(state => state.todos)

    const addTask = () => {
        dispatch(addTodo(text))
        if (text.trim()) {
            setText('')
        }
    }

    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch])


    return (
        <div className="App">
            <NewTodoForm
                value={text}
                handleAction={addTask}
                updateText={setText}
            />
            {status === 'loading' && <h2>Loading...</h2>}
            {error && <h2>something wrong: {error}</h2>}
            
            <Todolist />

        </div>
    );
}

export default App1;

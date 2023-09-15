import React, { useEffect, useState } from 'react';
import './App.css';
import { NewTodoForm } from './Components/NewTodoForm';
import { addTodo, fetchTodos } from './store/todoSlice';
import { Todolist } from './Components/Todolist';
import { useAppDispatch } from './hook';

export type ToDoType = {
    id: string
    title: string
    completed: boolean
}

function App1() {
    const [text, setText] = useState('')
    const dispatch = useAppDispatch()

    const addTask = () => {
        dispatch(addTodo(text))
        if(text.trim()) {
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
            <Todolist />
        </div>
    );
}

export default App1;

import React, { useState } from 'react';
import './App.css';
import { NewTodoForm } from './Components/NewTodoForm';
import { addTodo } from './store/todoSlice';
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

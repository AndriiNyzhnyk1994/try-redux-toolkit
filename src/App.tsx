import React, { useState } from 'react';
import './App.css';
import { Todolist } from './Components/Todolist';
import { InputField } from './Components/InputField';

export type ToDoType = {
  id: string
  title: string
  completed: boolean
}

function App() {

  const [todos, setTodos] = useState<ToDoType[]>([])
  const [text, setText] = useState('')

  const addTodo = () => {
    if (text.trim().length) {
      const todo: ToDoType = {
        id: new Date().toISOString(),
        title: text,
        completed: false
      }
      setTodos([todo, ...todos])
    }
    setText('')
  }

  const removeTodo = (todoId: string) => {
    setTodos(todos.filter(t => t.id !== todoId))
  }

  const changeTodoStatus = (todoId: string, status: boolean) => {
    setTodos(
      todos.map(t => {
        if (t.id === todoId) {
          return { ...t, completed: status }
        }
        return t
      })
    )
  }


  return (
    <div className="App">
      <InputField
        text={text}
        handleSubmit={addTodo}
        handleInput={setText}
      />
      <Todolist
        todos={todos}
        removeTodo={removeTodo}
        changeTodoStatus={changeTodoStatus} />
    </div>
  );
}

export default App;

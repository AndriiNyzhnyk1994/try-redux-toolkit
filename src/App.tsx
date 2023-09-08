import React, { useState } from 'react';
import './App.css';

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

  const removeTodo = (toDoId: string) => {
    setTodos(todos.filter(t => t.id !== toDoId))
  }

  const changeTodoStatus = (toDoId: string, status: boolean) => {
    setTodos(
      todos.map(t => {
        if(t.id === toDoId) {
          return {...t, completed: status}
        }
        return t
      })
    )
  }


  return (
    <div className="App">
      <label >
        <input value={text} onChange={(e) => { setText(e.currentTarget.value) }} />
        <button onClick={addTodo}>Add todo</button>
      </label>
      <ul>
        {
          todos.map((t) => {
            return (
              <li key={t.id}>
                <input
                  type="checkbox"
                  checked={t.completed}
                  onChange={(e) => { changeTodoStatus(t.id, e.currentTarget.checked) }} />
                <span>{t.title}</span>
                <span onClick={() => removeTodo(t.id)} className='deleter'>&times;</span>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;

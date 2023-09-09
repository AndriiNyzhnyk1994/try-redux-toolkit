import React, { ChangeEvent, KeyboardEvent } from 'react'

type PropsType = {
  value: string
  updateText: (value: string) => void
  handleAction: () => void
}

export const NewTodoForm: React.FC<PropsType> = ({ value, updateText, handleAction }) => {
  return (
    <label>
      <input
        value={value}
        onChange={(e) => { updateText(e.currentTarget.value) }}
        placeholder='please write a new todo'
      />
      <button onClick={handleAction}>Add todo</button>
    </label>
  )
}

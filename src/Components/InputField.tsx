import React, { ChangeEvent, KeyboardEvent } from 'react'

type PropsType = {
    text: string
    handleInput: (value: string) => void
    handleSubmit: () => void
}

export function InputField({text, handleInput, handleSubmit} : PropsType) {
  return (
    <label>
        <input value={text} onChange={(e) => { handleInput(e.currentTarget.value) }} />
        <button onClick={handleSubmit}>Add todo</button>
      </label>
  )
}

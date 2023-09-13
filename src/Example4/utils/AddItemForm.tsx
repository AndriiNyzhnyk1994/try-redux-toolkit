import React, { ChangeEvent, useState } from 'react'

type PropsType = {
    addItem: (title: string) => void
}

export function AddItemForm(props: PropsType) {
    const [title, setTitle] = useState('')
    const [error, setError] = useState<null | string>(null)

    const addItem = () => {
        if(title.trim()) {
            props.addItem(title)
            setTitle('')
        }else {
            setError('Title is required')
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        if(error) {
            setError(null)
        } 
    } 



    return (
        <div>
            <input value={title} onChange={onChangeHandler} />
            <button onClick={addItem}>add</button>
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>
    )
}

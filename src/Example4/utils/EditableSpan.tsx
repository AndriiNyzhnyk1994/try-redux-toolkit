import React, { ChangeEvent, useState } from 'react'


type PropsType = {
    title: string
    changeTitle: (value: string) => void
}

export function EditableSpan(props: PropsType) {
    const [editMode, setEditMode] = useState(false)
    const [editTitle, setEditTitle] = useState(props.title)


    const editModeOn = () => {
        setEditMode(true)
    }
    const editModeOff = () => {
        if (editTitle.trim()) {
            props.changeTitle(editTitle)
            setEditMode(false)
        }
    }





    return (
        editMode
            ? <input
                onChange={(e) => { setEditTitle(e.currentTarget.value) }}
                value={editTitle}
                onBlur={editModeOff}
                autoFocus={true}
            ></input>
            : <span onDoubleClick={editModeOn}>{props.title}</span>
    )
}

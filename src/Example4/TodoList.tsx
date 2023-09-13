import React from 'react'
import { TaskType } from './App4'

type PropsType = {
    title: string
    tasks: TaskType[]
}


export function TodoList(props: PropsType) {
    return (
        <div>
            <h2>{props.title}</h2>
            <div>
                <input />
                <button>add</button>
            </div>
            <ul>
                {
                    props.tasks.map(t => {
                        return (
                            <li key={t.taskId}>
                                <input type="checkbox" checked={t.isDone} />
                                <span>{t.title}</span>
                                <button>x</button>
                            </li>
                        )
                    })
                }

            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}

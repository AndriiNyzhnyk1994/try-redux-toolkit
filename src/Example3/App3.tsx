import React, { useState } from 'react'

export default function App3() {

    const [count, setCount] = useState<number>(0)

    const increment = () => {
        setCount(count => count + 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>INC</button>
        </div>
    )
}

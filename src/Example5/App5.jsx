import React, { useState } from 'react'
import { useGetGoodsQuery } from './redux/goodsAPI'


export function App5() {
  const [count, setCount] = useState('')
  const {data = [], isLoading} = useGetGoodsQuery(2)
  
  // calling hook `useGetGoodsQuery()` means that 
  // right now we send a request to server 
  // (baseURL+endpoint = http://localhost:3001/goods)
  // {data = []} we search data in result of useGetGoodsQuery call
  // and an empty array is initial value (if we got nothing)


  if(isLoading) return <h1>Loading</h1>


  return (
    <div>App5
      <ul>
        {data.map(item => {
          return <li key={item.id}>{item.name}</li>
        })}
      </ul>
    </div>
  )
}

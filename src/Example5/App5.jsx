import React from 'react'
import { useGetGoodsQuery } from './redux/goodsAPI'


export function App5() {
  
  const {data = [], isLoading} = useGetGoodsQuery()
  
  // calling hook `useGetGoodsQuery()` means that 
  // right now we send a request to server 
  // (baseURL+endpoint = http://localhost:3001/goods)

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

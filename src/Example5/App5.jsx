import React, { useState } from 'react'
import { useAddProductMutation, useGetGoodsQuery } from './redux/goodsAPI'


export function App5() {
  const [count, setCount] = useState('')
  const {data = [], isLoading} = useGetGoodsQuery(count)
  // calling hook `useGetGoodsQuery()` means that 
  // right now we send a request to server 
  // (baseURL+endpoint = http://localhost:3001/goods)
  // {data = []} we search data in result of useGetGoodsQuery call
  // and empty array is initial value (if we got nothing)


  const [addProduct, {isError}] = useAddProductMutation()
  // useAddProductMutation() cannot make request automatically unlike useGetGoodsQuery
  // [addProduct] - is a function, that makes request to server 
  // and we can call it function evertwhere we want
  // second element in array [{isError}] this object is a similar to 
  // like object returned by  useGetGoodQuery



  if(isLoading) return <h1>Loading</h1>


  return (
    <div>App5
      <div>
        <select value={count} onChange={(e) => setCount(e.target.value)}>
          <option value="''">All</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <ul>
        {data.map(item => {
          return <li key={item.id}>{item.name}</li>
        })}
      </ul>
    </div>
  )
}

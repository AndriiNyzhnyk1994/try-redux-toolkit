import React, { useState } from 'react'
import { useAddProductMutation, useDeleteProductMutation, useGetGoodsQuery } from './redux/goodsAPI'


export function App5() {
  const [count, setCount] = useState('')
  const [newProduct, setNewProduct] = useState('')
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

  const [deleteProduct, {isLoading: loading}] = useDeleteProductMutation()

  const handleAddProduct = async() => {
    if(newProduct.trim()) {
      await addProduct({name: newProduct}).unwrap()
      setNewProduct('')
    }
  }
  const handleDeleteProduct = async(id) => {
      await deleteProduct(id).unwrap()
  }



  if(loading) return <h1>add loading</h1>



  return (
    <div>App5
      <div>
        <input value={newProduct} onChange={(e) => setNewProduct(e.target.value)}/>
        <button onClick={handleAddProduct}>Add</button>
      </div>
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
          return <li key={item.id}>
            <span>{item.name}</span>
            <button onClick={() => {handleDeleteProduct(item.id)}}>x</button>
          </li>
        })}
      </ul>
    </div>
  )
}

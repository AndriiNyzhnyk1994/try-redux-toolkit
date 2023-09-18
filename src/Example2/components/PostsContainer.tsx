import React, { useEffect, useState } from 'react'
import { postAPI } from '../services/PostServise'
import { IPost } from '../models/IPost'
import { PostItem } from './PostItem'

export function PostsContainer() {

  const [limit, setLimit] = useState(10)

  const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(limit)

  useEffect(() => {
    setTimeout(() => {setLimit(4)}, 3000)
  }, [])


  return (
    <div >Posts Container
      <div className='post__list'>
        {isLoading &&  <h1>Loading...</h1>}
        {error &&  <h1>Error: Something went wrong</h1>}
        {posts && posts.map( post => {
          return(
            <PostItem key={post.id} post={post}/>
          )
        })}
      </div>
    </div>
  )
}
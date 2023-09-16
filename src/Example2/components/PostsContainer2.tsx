import React, { useEffect, useState } from 'react'
import { postAPI } from '../services/PostServise'
import { PostItem } from './PostItem'

export function PostsContainer2() {
  const [limit, setLimit] = useState(30)

  const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(limit)

  useEffect(() => {
    setTimeout(() => {setLimit(4)}, 2000)
  }, [])

  return (
    <div style={{marginLeft: '10px'}}>Posts Container 2
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

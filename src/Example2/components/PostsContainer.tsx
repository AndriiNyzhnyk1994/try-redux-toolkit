import React, { useEffect, useState } from 'react'
import { postAPI } from '../services/PostServise'
import { IPost } from '../models/IPost'
import { PostItem } from './PostItem'

export function PostsContainer() {

  const [limit, setLimit] = useState(3)

  const { data: posts, error, isLoading, refetch } = postAPI.useFetchAllPostsQuery(limit)
  // state that hook useFetchAllPostsQuery() returns named as `data` ( type IPost[])
  // but in future we want to rename this `data` to `post`
  // so {data: posts} means, that we captured returned `data` 
  // from hook and renamed `data` to `posts`
  // so from now we have a variable `posts: IPost[]` and we can use it in JSX

  // refetch function makes another request to server


  useEffect(() => {
    setTimeout(() => { setLimit(2) }, 2000)
  }, [])


  return (
    <div >Posts Container
      <button onClick={() => refetch()}>REFETCH</button>
      <div className='post__list'>
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>Error: Something went wrong</h1>}
        {posts && posts.map(post => {
          return (
            <PostItem key={post.id} post={post} />
          )
        })}
      </div>
    </div>
  )
}

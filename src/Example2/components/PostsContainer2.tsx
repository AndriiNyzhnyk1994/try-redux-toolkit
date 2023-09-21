import React, { useEffect, useState } from 'react'
import { postAPI } from '../services/PostServise'
import { PostItem } from './PostItem'

export function PostsContainer2() {
  const [limit, setLimit] = useState(5)

  const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(limit)
  // state that hook useFetchAllPostsQuery() returns named as `data` ( type IPost[])
  // but in future we want to rename this `data` to `post`
  // so {data: posts} means, that we captured returned `data` 
  // from hook and renamed `data` to `posts`
  // so from now we have a variable `posts: IPost[]` and we can use it in JSX
 
  return (
    <div style={{ marginLeft: '10px' }}>Posts Container 2
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

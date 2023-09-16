import React from 'react'
import { postAPI } from '../services/PostServise'
import { IPost } from '../models/IPost'
import { PostItem } from './PostItem'

export function PostsContainer() {
  const {data: posts} = postAPI.useFetchAllPostsQuery(7)

  return (
    <div>Posts Container
      <div >
        {posts && posts.map( post => {
          return(
            <PostItem key={post.id} post={post}/>
          )
        })}
      </div>
    </div>
  )
}

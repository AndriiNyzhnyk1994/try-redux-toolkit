import React, { useEffect, useState } from 'react'
import { postAPI } from '../services/PostServise'
import { PostItem } from './PostItem'
import { IPost } from '../models/IPost'

export function PostsContainer2() {
  const [limit, setLimit] = useState(100)

  const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(limit)
  // state that hook useFetchAllPostsQuery() returns named as `data` ( type IPost[])
  // but in future we want to rename this `data` to `post`
  // so {data: posts} means, that we captured returned `data` 
  // from hook and renamed `data` to `posts`
  // so from now we have a variable `posts: IPost[]` and we can use it in JSX

  const [createPost, { }] = postAPI.useCreatePostMutation()
  const [updatePost, { }] = postAPI.useUpdatePostMutation()
  const [deletePost, { }] = postAPI.useDeletePostMutation()
 
  
  const handleCreate = async () => {
    const title = prompt()
    await createPost({ title, body: 'new body' } as IPost)
  }

  const handleUpdate = async (post: IPost) => {
    await updatePost(post)
  }

  const handleDelete = async (post: IPost) => {
    await deletePost(post)
  }



  return (
    <div style={{ marginLeft: '10px' }}>Posts Container 2
      <div>
        <button onClick={handleCreate}>ADD</button>
      </div>
      <div>
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>Error: Something went wrong</h1>}
        {posts && posts.map(post => {
          return (
            <PostItem
              key={post.id}
              post={post}
              remove={handleDelete}
              update={handleUpdate}
            />
          )
        })}
      </div>
    </div>
  )
}

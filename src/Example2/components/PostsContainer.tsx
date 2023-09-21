import React, { useEffect, useState } from 'react'
import { postAPI } from '../services/PostServise'
import { IPost } from '../models/IPost'
import { PostItem } from './PostItem'

export function PostsContainer() {

  const [limit, setLimit] = useState(100)

  const { data: posts, error, isLoading, refetch, } = postAPI.useFetchAllPostsQuery(limit)
  // state that hook useFetchAllPostsQuery() returns named as `data` ( type IPost[])
  // but in future we want to rename this `data` to `post`
  // so {data: posts} means, that we captured returned `data` 
  // from hook and renamed `data` to `posts`
  // so from now we have a variable `posts: IPost[]` and we can use it in JSX

  // `refetch` function makes another request to server

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
    <div >Posts Container
      <button onClick={() => refetch()}>REFETCH</button>
      <div>
        <button onClick={handleCreate}>ADD</button>
      </div>
      <div className='post__list'>
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

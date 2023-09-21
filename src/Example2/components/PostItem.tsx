import React from 'react'
import { IPost } from '../models/IPost'

type PropsType = {
  post: IPost,
  remove: (post: IPost) => void,
  update: (post: IPost) => void
}


export function PostItem({ post, remove, update }: PropsType) {

  const handleRemove = (event: React.MouseEvent) => {
    event.stopPropagation()
    remove(post)
  }

  const handleUpdate = (event: React.MouseEvent) => {
    const title = prompt()
    event.stopPropagation()
    update({...post, title} as IPost)
  }

  return (
    <div
      style={{ padding: '5px', border: '1px solid black', marginTop: '10px' }}
      onClick={handleUpdate}
    >
      {post.title}. {post.body}
      <button onClick={handleRemove}>x</button>
    </div>
  )
}

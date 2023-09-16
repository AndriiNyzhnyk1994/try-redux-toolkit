import React from 'react'
import { IPost } from '../models/IPost'

type PropsType = {
    post: IPost
}


export function PostItem({post}: PropsType) {
  return (
        <div style={{padding: '5px', border: '1px solid black', marginTop: '10px'}}>
              {post.title}. {post.body}
              <button>x</button>
            </div>
  )
}

import React from 'react'
import Post from './Post'

const PostsBlock = ({ posts, depth }) => {
  let postIndex = 0
  return (
    <div>
      {posts.map(post => {
        postIndex += 1
        return (
          <Post
            PostsBlock={PostsBlock}
            key={`${postIndex}.${depth}`}
            name={post.name}
            content={post.content}
            depth={depth}
          />
        )
      })}
    </div>
  )
}

export default PostsBlock

import React, { useState } from 'react'
import styled from 'styled-components'
import PostForm from './PostForm'
import PostsBlock from './PostsBlock'

const Wrapper = styled.div`
  padding: 50px 20%;
`

const App = () => {
  const [posts, setPosts] = useState([])

  return (
    <Wrapper>
      <h1 style={{ textAlign: 'center' }}>
        <span role="img" aria-label="celebration">🎉</span>
        CIS 197 Community
        <span role="img" aria-label="celebration">🎉</span>
      </h1>
      <PostForm posts={posts} setPosts={setPosts} />
      { posts.length > 0 ? <PostsBlock posts={posts} depth={1} /> : '' }
    </Wrapper>
  )
}
export default App

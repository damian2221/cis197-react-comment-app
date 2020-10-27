import React, { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 15px;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 11px;
`

const PostForm = ({ posts, setPosts, initialContent = '' }) => {
  const [newPostName, setNewPostName] = useState('')
  const [newPostContent, setNewPostContent] = useState(initialContent)

  return (
    <Wrapper>
      <h4 style={{ marginBottom: '17px' }}>New Post</h4>
      <input
        className="form-control"
        style={{ marginBottom: '13px' }}
        value={newPostName}
        onChange={e => {
          setNewPostName(e.target.value)
        }}
        placeholder="Name..."
      />
      <textarea
        className="form-control"
        style={{ marginBottom: '13px' }}
        value={newPostContent}
        onChange={e => {
          setNewPostContent(e.target.value)
        }}
        placeholder="Write a new post..."
      />
      <input
        type="submit"
        value="Submit"
        className="btn btn-info float-right"
        disabled={newPostContent.length === 0 || newPostName.length === 0}
        onClick={() => {
          setPosts([...posts, { name: newPostName, content: newPostContent }])
          setNewPostContent('')
          setNewPostName('')
        }}
      />
    </Wrapper>
  )
}

export default PostForm

import React, { useState } from 'react'
import styled from 'styled-components'
import PostsBlock from './PostsBlock'
import Reply from './Reply'
import Voter from './Voter'

const DepthDivider = styled.div`
  padding-left: 10px;
  border-left: 2px solid rgb(236, 236, 236);
  margin-bottom: 7px;
`

const MainLevelPost = styled.div`
  padding: 15px;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 11px;
  margin-top: 20px;
`

const Post = ({ name, content, depth }) => {
  const [replies, setReplies] = useState([])

  const PostElement = (
    <div>
      <Voter />
      <b style={{ color: 'blue' }}>{ name }</b>
      <p style={{ margin: '6px 0' }}>{ content }</p>
      <DepthDivider>
        <PostsBlock posts={replies} depth={depth + 1} />
      </DepthDivider>
      { depth <= 2 ? <Reply replies={replies} setReplies={setReplies} name={name} /> : '' }
    </div>
  )

  if (depth === 1) {
    return <MainLevelPost>{ PostElement }</MainLevelPost>
  }
  return PostElement
}

export default Post

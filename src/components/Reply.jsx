import React, { useState } from 'react'
import styled from 'styled-components'
import PostForm from './PostForm'

const ReplyButton = styled.div`
  color: grey;
  opacity: 0.75;
  cursor: pointer;
  margin-bottom: 10px;
  
  &:hover {
    opacity: 1;
  }
`

const Reply = ({ replies, setReplies, name }) => {
  const [showReplyForm, setShowReplyForm] = useState(false)

  const onSubmit = newReplies => {
    setReplies(newReplies)
    setShowReplyForm(false)
  }

  return (
    <div>
      <ReplyButton onClick={e => {
        setShowReplyForm(!showReplyForm)
      }}
      >
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="bi bi-chat-left"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M14 1H2a1 1 0 0 0-1 1v11.586l2-2A2 2 0 0 1 4.414
                11H14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2
                2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1
                4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
          />
        </svg>
        &nbsp;Reply
      </ReplyButton>
      { showReplyForm ? <PostForm posts={replies} setPosts={onSubmit} initialContent={`@${name} `} /> : '' }
    </div>
  )
}

export default Reply

import React, { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  float: right;
  display: flex;
  flex-direction: column;
`

const VoteCountDisplay = styled.div`
  text-align: center;
  margin: 0;
`

const Voter = () => {
  const [voteCount, setVoteCount] = useState(0)
  return (
    <Wrapper>
      <svg
        onClick={e => {
          setVoteCount(voteCount + 1)
        }}
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        className="bi bi-chevron-up"
        style={{ cursor: 'pointer' }}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8
              5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
        />
      </svg>
      <VoteCountDisplay>{ voteCount }</VoteCountDisplay>
      <svg
        onClick={e => {
          setVoteCount(voteCount - 1)
        }}
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        className="bi bi-chevron-down"
        style={{ cursor: 'pointer' }}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5
                0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </Wrapper>
  )
}

export default Voter

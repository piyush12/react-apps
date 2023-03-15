import React from "react";
import styled from "styled-components";

function Comment({
  author,
  username,
  content,
  children,
  replyingTo,
  id,
  onReply,
}: {
  author: string;
  username: string;
  content: string;
  replyingTo?: string;
  children?: React.ReactNode;
  id: string;
  onReply: (id: string) => void;
}) {
  return (
    <CommentContentStyles>
      <header>
        <div className='author-name'>
          <span>{author}</span>
          <span className='author-id'>@{username}</span>
        </div>
        <button onClick={() => onReply(id)}>Reply</button>
      </header>
      <p>
        {replyingTo && <span className='author-tag'>@{replyingTo} </span>}{" "}
        {content}.
      </p>
      {children}
    </CommentContentStyles>
  );
}

export default Comment;

const CommentContentStyles = styled.div`
  /* display: flex; */
  width: 100%;
  margin-left: 32px;

  header {
    display: flex;
    width: 100%;
    margin-bottom: 18px;

    .author-name {
      margin-right: auto;
      font-size: 0.9rem;
      font-weight: 700;
      color: var(--feedback-gray-blue-600);
      display: flex;
      flex-direction: column;

      .author-id {
        color: var(--feedback-gray-blue-500);
        font-weight: 400;
      }
    }
    button {
      border: none;
      outline: none;
      color: var(--feedback-blue-400);
      background-color: transparent;
      cursor: pointer;
      font-weight: 600;
      font-size: 0.7rem;
      display: flex;
      align-self: center;

      &:hover {
        text-decoration: underline;
      }
    }
  }
  p {
    color: var(--feedback-gray-blue-500);
    font-weight: 400;

    .author-tag {
      color: var(--feedback-pink);
      font-weight: 700;
    }
  }
`;

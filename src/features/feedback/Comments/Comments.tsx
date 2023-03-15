import {
  Comment as ICommentProps,
  Reply,
  User,
} from "@/pages/feedback/interface";
import React, { useState } from "react";
import styled from "styled-components";
import FButton from "../FeedbackButton/FButton";
import { TextArea } from "../FormElements";
import Paper from "../Paper";

import Avatar from "./Avatar";
import Comment from "./Comment";

function Comments({
  comments,
  addPost,
}: {
  comments?: ICommentProps[];
  addPost: (
    { id, content }: { id: string; content: string },
    commentId: number
  ) => void;
}) {
  const onPostReply = (
    post: { id: string; content: string },
    commentId: number
  ) => {
    addPost(post, commentId);
  };

  return (
    <>
      <CommentHolderStyles>
        <div className='commentCount'>{comments?.length} Comments</div>
        <CommentStyles>
          {comments?.map((comment, index) => {
            const hasReplies = comment.replies?.length || 0;
            return (
              <React.Fragment key={comment.id}>
                <CommentSection
                  user={comment.user}
                  content={comment.content}
                  hasReplies={hasReplies}
                  replies={comment.replies || []}
                  id={`post_${comment.id}`}
                  onPostReply={(post) => onPostReply(post, comment.id)}
                />

                {comments?.length - 1 !== index && <CommentSeparator />}
              </React.Fragment>
            );
          })}
        </CommentStyles>
      </CommentHolderStyles>
    </>
  );
}

export default Comments;

function CommentSection({
  user,
  content,
  hasReplies,
  replies,
  id,
  onPostReply,
  replyingTo,
}: {
  user: User;
  content: string;
  hasReplies: number;
  replies: Reply[];
  id: string;
  onPostReply: (content: { id: string; content: string }) => void;
  replyingTo?: string;
}) {
  const [commentId, setCommentId] = useState("");
  const [userReplyText, setUserReplyText] = useState("");
  const handleReply = (id: string) => {
    setCommentId(id);
  };

  const handlePostReply = () => {
    // console.log(id,"userReplyText", userReplyText);
    onPostReply({ id: id, content: userReplyText });
    setCommentId("");
  };

  return (
    <div className={`comment-list ${hasReplies > 0 ? "has-reply" : ""}`}>
      <div className='comment'>
        <Avatar Imagesrc={user.image} alt={user.name} />
        <Comment
          content={content}
          author={user.name}
          username={user.username}
          id={id}
          onReply={handleReply}
          replyingTo={replyingTo}
        >
          {commentId === id && (
            <ReplyFormStyles>
              <TextArea
                className='replyTextarea'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setUserReplyText(e.target.value)
                }
              />
              <FButton variant='primary' onClick={handlePostReply}>
                Post Reply
              </FButton>
            </ReplyFormStyles>
          )}
        </Comment>
      </div>
      {hasReplies
        ? replies.map((reply, index) => {
            const hasReplies = reply.replies?.length || 0;
            return (
              <div className='comment-reply' key={index}>
                <CommentSection
                  user={reply.user}
                  content={reply.content}
                  hasReplies={hasReplies}
                  replies={reply.replies || []}
                  id={`reply_${reply.id}`}
                  onPostReply={onPostReply}
                  replyingTo={reply.replyingTo}
                />
              </div>
            );
          })
        : null}
    </div>
  );
}

const CommentHolderStyles = styled(Paper)`
  .commentCount {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--feedback-gray-blue-600);
  }
`;

const CommentStyles = styled.div`
  .comment {
    display: flex;
  }

  .comment-list {
    padding-top: 32px;
    padding-bottom: 32px;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .comment-reply {
    padding-left: 45px;
  }

  .has-reply {
    padding-bottom: 0;
    &::before {
      background-color: var(--feedback-gray-blue-500);
      width: 1px;
      content: "";
      position: absolute;
      height: calc(100% - 250px);
      left: 15px;
      opacity: 0.1;
      top: 100px;
    }
  }
`;

const CommentSeparator = styled.div`
  background-color: var(--separator);
  height: 1px;
  opacity: 0.25;
`;

const ReplyFormStyles = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 16px;

  .replyTextarea {
    flex: 1;
  }

  button {
    display: flex;
    align-self: baseline;
  }
`;

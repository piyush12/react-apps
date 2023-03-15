/* eslint-disable @next/next/no-page-custom-font */
import SuggestionList from "@/features/feedback/SuggestionList";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { Col, Container, Row } from "styled-bootstrap-grid";
import FButton from "@/features/feedback/FeedbackButton/FButton";
import Comments from "@/features/feedback/Comments";
import { TopHeader } from "@/features/feedback/TopHeader";
import Layout from "@/features/feedback/Layout";
import { ProductRequest } from "./interface";
import styled from "styled-components";
import Paper from "@/features/feedback/Paper";
import { TextArea } from "@/features/feedback/FormElements";

const COMMENT_LIMIT = 225;

function UserFeedback({ suggestion }: { suggestion: ProductRequest }) {
  const [userComment, setUserComment] = useState("");
  const router = useRouter();

  const addPost = async (
    post: { id: string; content: string },
    commentId: number
  ) => {
    if (post.content || userComment) {
      await fetch(`/api/feedback/${router.query.feedbackId}`, {
        method: "POST",
        body: JSON.stringify({
          content: post.content || userComment,
          commentId: commentId,
          postId: post.id,
          newPostComment: userComment ? true : false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    setUserComment("");
    router.replace(router.asPath);
  };

  return (
    <Layout>
      <main className='wrapper'>
        <Container>
          <Row>
            <Col mdOffset={2} md={9}>
              <TopHeader>
                <FButton
                  variant='secondary'
                  onClick={() =>
                    router.push(
                      `/feedback/edit-feedback/${router.query.feedbackId}`
                    )
                  }
                >
                  Edit Feedback
                </FButton>
              </TopHeader>
              <SuggestionList suggestion={suggestion} />

              {suggestion.comments && (
                <Comments comments={suggestion.comments} addPost={addPost} />
              )}

              <AddCommentStyles>
                <header>Add Comment</header>
                <TextArea
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setUserComment(event.target.value)
                  }
                  maxLength={COMMENT_LIMIT}
                  value={userComment}
                />
                <footer>
                  <span className='character-count'>
                    {COMMENT_LIMIT - userComment.length} characters left
                  </span>
                  <FButton variant='primary' onClick={addPost}>
                    Post Comment
                  </FButton>
                </footer>
              </AddCommentStyles>
            </Col>
          </Row>
        </Container>
      </main>
    </Layout>
  );
}

export default UserFeedback;

const AddCommentStyles = styled(Paper)`
  margin-top: 24px;
  margin-bottom: 24px;

  header {
    font-size: calc(18px / 16 * 1rem);
    font-weight: 700;
    color: var(--feedback-gray-blue-600);
    margin-bottom: 24px;
  }

  footer {
    display: flex;
    margin-top: 27px;
    align-items: center;

    .character-count {
      color: var(--feedback-gray-blue-500);
      font-size: 1rem;
      font-weight: 400;
      margin-right: auto;
    }
  }
`;

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking", // can also be true or 'blocking'
  };
}

export async function getStaticProps({
  params,
}: {
  params: { feedbackId: number };
}) {
  const { feedbackId } = params;

  const response = await fetch(
    `${process.env.PRODUCT_FEEDBACK_API_ROUTE_URL}/api/feedback/${feedbackId}`
  );

  const suggestion = await response.json();

  return {
    // Passed to the page component as props
    props: { suggestion },
  };
}

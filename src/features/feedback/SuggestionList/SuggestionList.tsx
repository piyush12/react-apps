import React from "react";
import styled from "styled-components";
import { PTags } from "@/features/feedback/style";
import Paper from "../Paper";
import UpVoteButton from "../UpVoteButton";
import ArrowIcon from "@/assets/feedback/shared/icon-arrow-up.svg";
import CommentCount from "./CommentCount";
import { ProductRequest } from "@/pages/feedback/interface";

function SuggestionList({
  suggestion,
  onUpVote,
}: {
  suggestion: ProductRequest;
  onUpVote?: (v: number) => void;
}) {
  const commentCount = suggestion.comments?.length || 0;
  return (
    <SuggestionListStyles>
      <UpVoteButton
        icon={ArrowIcon}
        position='top'
        onClick={() => onUpVote!(suggestion.id)}
      >
        {suggestion.upvotes}
      </UpVoteButton>

      <div className='list-content'>
        <header>{suggestion.title}</header>
        <p>{suggestion.description}</p>
        <PTags>{suggestion.category}</PTags>
      </div>
      <CommentCount count={commentCount} />
    </SuggestionListStyles>
  );
}

export default SuggestionList;

const SuggestionListStyles = styled(Paper)`
  display: flex;
  gap: 40px;
  align-items: baseline;

  margin-bottom: 20px;

  .list-content {
    margin-right: auto;

    header {
      margin-bottom: 4px;
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--feedback-gray-blue-600);
    }

    p {
      font-size: 1rem;
      color: var(--feedback-gray-blue-500);
      font-weight: 400;
      margin-bottom: 12px;
    }
  }
`;

import React from "react";
import styled from "styled-components";
import CommentIcon from "@/assets/feedback/shared/icon-comments.svg";
import Image from "next/image";

function CommentCount({ count = 0 }: { count: number }) {
  return (
    <CommentCountStyles>
      <Image src={CommentIcon} alt='comment' />
      <span>{count}</span>
    </CommentCountStyles>
  );
}

export default CommentCount;

const CommentCountStyles = styled.div`
  font-size: 1rem;
  color: var(--feedback-gray-blue-60);
  display: flex;
  justify-content: center;
  gap: 8px;
  font-weight: 700;
  align-self: center;
  align-items: center;
`;

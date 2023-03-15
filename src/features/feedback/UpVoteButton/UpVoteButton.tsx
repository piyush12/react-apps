import Image from "next/image";
import React from "react";
import styled from "styled-components";
import FeedbackButton from "../FeedbackButton";

function UpVoteButton({
  children,
  icon: Icon,
  position = "left",
  ...props
}: {
  children: React.ReactNode;
  icon: string;
  position?: "top" | "left";
  [x: string]: any;
}) {
  return (
    <UpVoteButtonStyles position={position} className='upvote-button' {...props}>
      <Image src={Icon} alt='' />
      {children}
    </UpVoteButtonStyles>
  );
}

export default UpVoteButton;

const UpVoteButtonStyles = styled(FeedbackButton)`
  font-weight: 700;
  color: var(--feedback-gray-blue-600);
  display: flex;
  align-items: center;
  flex-direction: ${({ position }) => (position === "top" ? "column" : "row")};
  gap: 6px;

  img {
    margin-top: ${({ position }) => (position === "top" ? "5px" : "0")};
    margin-left: ${({ position }) => (position === "top" ? "0px" : "5px")};
  }
`;

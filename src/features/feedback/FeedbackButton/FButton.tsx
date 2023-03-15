import React from "react";
import styled from "styled-components";
import FeedbackButton from "./FeedbackButton";

function FButton({
  variant,
  children,
  ...delegated
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  [x: string]: any;
}) {
  return <FButtonStyles {...delegated} variant={variant}>{children}</FButtonStyles>;
}

export default FButton;

const FButtonStyles = styled(FeedbackButton)`
  font-weight: 700;
  padding: 12px 24px;
  cursor: pointer;
`;

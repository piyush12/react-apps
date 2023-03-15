import React from "react";
import LinkButton from "@/components/LinkButton";
import styled from "styled-components";

function FeedbackButton({
  children,
  variant,
  ...delegated
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  [x: string]: any;
}) {
  return (
    <FeedbackButtonStyles {...delegated} variant={variant}>
      {children}
    </FeedbackButtonStyles>
  );
}

export default FeedbackButton;

const SET_VARIANT: { [x: string]: string } = {
  primary: "var(--feedback-pink)",
  secondary: "var(--feedback-blue-400)",
};

const SET_VARIANT_HOVER: { [x: string]: string } = {
  primary: "var(--feedback-pink-hover)",
  secondary: "var(--feedback-blue-400-hover)",
};

const FeedbackButtonStyles = styled(LinkButton)`
  border-radius: 10px;
  background-color: ${({ variant }) =>
    variant ? SET_VARIANT[variant] : "var(--feedback-gray-blue-200)"};
  padding: 6px 16px;
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({ variant }) =>
    variant ? "var(--white)" : "var(--feedback-blue-400)"};
  outline: none;
  border: 0;
  cursor: pointer;

  &:hover {
    background-color: ${({ variant }) =>
      variant ? SET_VARIANT_HOVER[variant] : "var(--feedback-gray-blue-300)"};
  }
`;

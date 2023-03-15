import React from "react";
import styled from "styled-components";

function TextArea({
  label,
  description,
  className,
  ...props
}: {
  label?: string;
  description?: string;
  className?: string;
  [x: string]: any;
}) {
  return (
    <FiedlStyles className={className}>
      {label && (
        <label htmlFor={props.id}>
          {label}
          <span>{description}</span>
        </label>
      )}
      <textarea {...props} id={props.id} />
    </FiedlStyles>
  );
}

export default TextArea;

const FiedlStyles = styled.div`
  width: 100%;
  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    color: var(--feedback-gray-blue-600);
    font-weight: 700;
    font-size: 0.9rem;
    gap: 2px;
    span {
      font-weight: 400;
      color: var(--feedback-gray-blue-500);
    }
  }

  textarea {
    background-color: var(--feedback-gray-blue-100);
    padding: 16px 24px;
    border: none;
    outline: none;
    width: 100%;
    font-size: 1rem;
    font-weight: 400;
    color: var(--feedback-gray-blue-600);
    min-height: 80px;
    border-radius: 5px;
  }
`;

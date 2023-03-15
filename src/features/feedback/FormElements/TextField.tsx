import React from "react";
import styled from "styled-components";

function TextField({
  label,
  description,
  ...props
}: {
  label: string;
  description: string;
  [x: string]: any;
}) {
  return (
    <TextFieldStyles>
      <label htmlFor={props["id"]}>
        {label}
        <span>{description}</span>
      </label>
      <input {...props} id={props["id"]} />
    </TextFieldStyles>
  );
}

export default TextField;

const TextFieldStyles = styled.div`
  input {
    background-color: var(--feedback-gray-blue-100);
    padding: 16px 24px;
    border: none;
    outline: none;
    width: 100%;
    font-size: 1rem;
    font-weight: 400;
    color: var(--feedback-gray-blue-600);
    border-radius: 5px;
  }

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
`;

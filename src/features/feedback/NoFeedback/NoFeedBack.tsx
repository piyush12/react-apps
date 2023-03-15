import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Paper from "../Paper";
import NotFoundImage from "../../../assets/feedback/suggestions/illustration-empty.svg";
import FButton from "../FeedbackButton/FButton";

function NoFeedBack() {
  return (
    <NoFeedbackStyles>
      <Image src={NotFoundImage} alt='' />
      <div className='notfound'>
        <h4>There is no feedback yet.</h4>
        <p>
          Got a suggestion? Found a bug that needs to be squashed? We love
          hearing about new ideas to improve our app.
        </p>
        <FButton variant='primary'>+ Add Feedback</FButton>
      </div>
    </NoFeedbackStyles>
  );
}

export default NoFeedBack;

const NoFeedbackStyles = styled(Paper)`
  min-height: 600px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  img{
    margin-top: 110px;
    margin-bottom: 50px;
  }

  .notfound {
    width: 55%;
  }

  h4 {
    font-size: 1.5rem;
    color: var(--feedback-gray-blue-600);
    font-weight: 700;
    margin-bottom: 16px;
  }

  p {
    font-weight: 400;
    color: var(--feedback-gray-blue-500);
    font-size: 1rem;
    line-height: 1.5rem;
    margin-bottom: 48px;
  }
`;

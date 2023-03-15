import Image from "next/image";
import React from "react";
import styled from "styled-components";
import ArrowLeftIcon from "@/assets/feedback/shared/icon-arrow-left.svg";
import { useRouter } from "next/router";

function TopHeader({
  bgColor = false,
  tagline,
  children,
}: {
  bgColor?: boolean;
  tagline?: string;
  children?: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <TopHeaderBarStyles bgColor={bgColor}>
      <div className='tagline'>
        <button className='back-link' onClick={() => router.back()}>
          <Image src={ArrowLeftIcon} alt='arrow left icon' />
          Go Back
        </button>
        {tagline && <h4>{tagline}</h4>}
      </div>
      {children}
      {/* {link && (
        <FButton href={link} variant='primary'>
          + Add Feedback
        </FButton>
      )} */}
    </TopHeaderBarStyles>
  );
}

export default TopHeader;

const TopHeaderBarStyles = styled.div`
  display: flex;
  margin-bottom: 24px;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ bgColor }: { bgColor: boolean }) =>
    bgColor ? "var(--feedback-gray-blue-800)" : "transparent"};
  border-radius: 10px;
  padding: ${({ bgColor }: { bgColor: boolean }) =>
    bgColor ? "32px 27px" : "0"};

  .back-link {
    font-size: 0.87rem;
    font-weight: 700;
    color: ${({ bgColor }: { bgColor: boolean }) =>
      bgColor ? "var(--white)" : "var(--feedback-gray-blue-500)"};
    margin-right: auto;
    cursor: pointer;
    outline: none;
    border: 0;
    background-color: transparent;

    &:hover {
      text-decoration: underline;
    }

    img {
      margin-right: 15px;
    }
  }
  .tagline {
    h4 {
      color: var(--white);
      font-size: 1.5rem;
    }
  }
`;

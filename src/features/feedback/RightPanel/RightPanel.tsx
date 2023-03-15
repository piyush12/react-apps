import React from "react";
import styled from "styled-components";
import Paper from "../Paper";
import BulbImage from "../../../assets/feedback/suggestions/icon-suggestions.svg";
import Image from "next/image";
import FButton from "../FeedbackButton/FButton";
import {
  SelectField,
  SelectFieldList,
  SelectFieldOption,
} from "../FormElements/Select";

function RightPanel({
  count,
  onSort,
  children,
}: {
  count: number;
  onSort: (v: string) => void;
  children: React.ReactNode;
}) {
  const [sortBy, setSortBy] = React.useState("");
  const handleChange = (val: string) => {
    if (val) {
      setSortBy(val);
      onSort(val);
    }
  };

  return (
    <main>
      <SuggestionBarStyles>
        <div className='suggestions'>
          <Image src={BulbImage} alt='bulb' />
          <span className='suggest-count'>{count} Suggestions</span>
          <span className='sort'>
            Sort by :{" "}
            <SelectField
              defaultValue='Votes'
              value={sortBy}
              onChange={handleChange}
            >
              <SelectFieldList>
                <SelectFieldOption value='mostVotes'>
                  Most Upvotes
                </SelectFieldOption>
                <SelectFieldOption value='leastVotes'>
                  Least Upvotes
                </SelectFieldOption>
                <SelectFieldOption value='mostComments'>
                  Most Comments
                </SelectFieldOption>
                <SelectFieldOption value='leastComments'>
                  Least Comments
                </SelectFieldOption>
              </SelectFieldList>
            </SelectField>
          </span>
        </div>

        <FButton variant='primary' href="/feedback/add-feedback">+ Add Feedback</FButton>
      </SuggestionBarStyles>

      {children}
    </main>
  );
}

export default RightPanel;

const SuggestionBarStyles = styled(Paper)`
  height: 72px;
  background-color: var(--feedback-gray-blue-800);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  .suggestions {
    display: flex;
    align-items: center;
    gap: 16px;
    flex: 1;
  }
  .suggest-count {
    font-size: 1.25rem;
    font-weight: 700;
  }
  .sort {
    padding-left: 16px;
    color: var(--link-light);
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    flex: 1;

    .select-field {
      width: 60%;

      .select {
        color: var(--link-light);
        font-size: 0.8rem;
        font-weight: 700;
        opacity: 1;
        background-color: transparent;
        justify-content: unset;
        gap: 10px;
      }
    }
  }
`;

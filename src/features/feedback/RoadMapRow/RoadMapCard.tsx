import React from "react";
import { IndicatorStyles, indicatorVariant, PTags } from "@/features/feedback/style";
import UpVoteButton from "@/features/feedback/UpVoteButton";
import ArrowIcon from "@/assets/feedback/shared/icon-arrow-up.svg";
import styled from "styled-components";
import CommentCount from "../SuggestionList/CommentCount";

type IVariant = "planned" | "progress" | "live";

function RoadMapCard({ variant }: { variant: IVariant }) {
  return (
    <RoadMapCardStyles variant={variant}>
      <header>
        <IndicatorStyles variant='planned' /> Planned
      </header>
      <div className='roadmap-card-body'>
        <h3>More comprehensive reports</h3>
        <p>It would be great to see a more detailed breakdown of solutions.</p>
        <PTags>Feature</PTags>
      </div>
      <footer>
        <UpVoteButton icon={ArrowIcon} position='left'>
          112
        </UpVoteButton>

        <CommentCount count={4} />
      </footer>
    </RoadMapCardStyles>
  );
}

export default RoadMapCard;

const RoadMapCardStyles = styled.div`
  background-color: var(--white);
  padding: 32px;
  border-radius: 5px 5px 0px 0px;
  border-top: 5px solid
    ${({ variant }: { variant: IVariant }) => indicatorVariant[variant]};
  margin-bottom: 24px;
  cursor: move;

  header {
    color: var(--feedback-gray-blue-500);
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .roadmap-card-body {
    margin-top: 8px;
    margin-bottom: 16px;

    h3 {
      color: var(--feedback-gray-blue-600);
      font-size: 1.2rem;
      margin-bottom: 4px;
    }

    p {
      font-size: 1rem;
      color: var(--feedback-gray-blue-500);
      line-height: 1.4rem;
      margin-bottom: 16px;
    }
  }
  footer {
    .upvote-button {
      padding: 11px 16px;
    }

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

import React from "react";
import styled from "styled-components";
import RoadMapCard from "./RoadMapCard";

function RoadMapRow() {
  return (
    <RoadMapRowStyles>
      <div className='title'>
        <h4>
          Planned <span>(2)</span>
        </h4>
        <p>Ideas prioritized for research</p>
      </div>
      <RoadMapCard variant="planned" />
      <RoadMapCard variant="planned" />
    </RoadMapRowStyles>
  );
}

export default RoadMapRow;

const RoadMapRowStyles = styled.div`
  margin-top: 24px;

  .title {
    margin-bottom: 32px;

    h4 {
      font-size: 1.12rem;
      color: var(--feedback-gray-blue-600);
      margin-bottom: 4px;
    }

    p {
      color: var(--feedback-gray-blue-500);
    }
  }
`;

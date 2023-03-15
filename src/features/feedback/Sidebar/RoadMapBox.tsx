import Link from "next/link";
import styled from "styled-components";
import Paper from "../Paper";
import { IndicatorStyles } from "../style";

interface IRoadMapStatus {
  planned: number;
  progress: number;
  live: number;
}

function Roadmap({ roadMapStatus }: { roadMapStatus: IRoadMapStatus }) {
  return (
    <RoadMapStyles>
      <header>
        Roadmap <Link href='/feedback/roadmap'>View</Link>
      </header>
      <RoadMapList>
        {Object.keys(roadMapStatus).map((status) => {
          return (
            <RoadmapItem
              key={status}
              status={status}
              count={roadMapStatus[status as keyof IRoadMapStatus]}
            />
          );
        })}
      </RoadMapList>
    </RoadMapStyles>
  );
}

export default Roadmap;

function RoadmapItem({ status, count }: { status: string; count: number }) {
  return (
    <li>
      <span className='text'>
        {/* @ts-ignore */}
        <IndicatorStyles variant={status} />{" "}
        {status === "progress" ? "in-progress" : status}
      </span>{" "}
      <span className='num'>{count}</span>
    </li>
  );
}

const RoadMapStyles = styled(Paper)`
  header {
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--feedback-gray-blue-600);
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;

    a {
      font-size: 0.8rem;
      color: var(--feedback-blue-400);
      font-weight: 600;
      text-decoration: underline;

      &:hover {
        color: var(--feedback-link-hover);
      }
    }
  }
`;

const RoadMapList = styled.ol`
  list-style: none;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1rem;
    color: var(--feedback-gray-blue-600);
    padding-bottom: 8px;

    .text {
      display: flex;
      align-items: center;
      gap: 24px;
      text-transform: capitalize;
    }

    .num {
      font-weight: 700;
    }
  }
`;

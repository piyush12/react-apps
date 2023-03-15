import styled from "styled-components";
import FeedbackButton from "../FeedbackButton";
import Paper from "../Paper";

interface IFilteredProps {
  all: string;
  ui: string;
  ux: string;
  enhancement: string;
  bug: string;
  feature: string;
}

const IFiltered: IFilteredProps = {
  all: "All",
  ui: "UI",
  ux: "UX",
  enhancement: "Enhancement",
  bug: "Bug",
  feature: "Feature",
};

function Filter({
  onFilterClick,
  query,
}: {
  onFilterClick: (val: string) => void;
  query: string | string[];
}) {
  return (
    <FilterStyles>
      {Object.keys(IFiltered).map((key) => {
        return (
          <FeedbackButton
            key={key}
            onClick={() => {
              onFilterClick(key);
            }}
            className={query === key ? "active" : ""}
          >
            {IFiltered[key as keyof IFilteredProps]}
          </FeedbackButton>
        );
      })}
    </FilterStyles>
  );
}
export default Filter;

const FilterStyles = styled(Paper)`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin: 24px 0;

  button {
    &.active {
      background-color: var(--feedback-blue-400);
      color: var(--white);
    }
  }
`;

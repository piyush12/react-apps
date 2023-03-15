import Paper from "@/features/feedback/Paper";
import styled from "styled-components";

export const AddEditFormStyles = styled(Paper)`
  margin-top: 50px;

  .icon {
    position: relative;
    top: -50px;
  }

  header {
    color: var(--feedback-gray-blue-600);
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 40px;
  }
`;

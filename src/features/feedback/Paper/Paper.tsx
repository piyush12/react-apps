import React from "react";
import styled from "styled-components";

function Paper({ children, ...delegated }: { children: React.ReactNode }) {
  return <PaperStyles {...delegated}>{children}</PaperStyles>;
}

export default Paper;

const PaperStyles = styled.div`
  padding: 24px;
  border-radius: 10px;
  background-color: var(--white);
`;

import styled from "styled-components";

export const indicatorVariant: { [x: string]: string } = {
  planned: "var(--feedback-orange)",
  progress: "var(--feedback-pink)",
  live: "var(--feedback-blue-400)",
};

export const IndicatorStyles = styled.span`
  width: 8px;
  height: 8px;
  background-color: ${({
    variant,
  }: {
    variant: "planned" | "progress" | "live";
  }) => indicatorVariant[variant]};
  border-radius: 50px;
  display: inline-flex;
`;

export const PTags = styled.span`
  border-radius: 10px;
  background-color: var(--feedback-gray-blue-200);
  padding: 6px 16px;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--feedback-blue-400);
  outline: none;
  border: 0;
`;

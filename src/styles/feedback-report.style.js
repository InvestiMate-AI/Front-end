import styled from "styled-components";
import themes from "./theme";

export const FeedbackReportListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  margin: 0;
  padding: 1rem 2rem;
`;

export const FeedbackReportItemLayout = styled.li`
  margin: 1rem;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  min-height: 400px;
  border: solid ${themes.colors.gray_50};
  border-radius: 1rem;
  background-color: ${themes.colors.gray_50};
`;

export const FeedbackReportChartLayout = styled.li`
  margin: 1rem;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;

  width: 100%;
  height: auto;
  border: solid ${themes.colors.gray_50};
  border-radius: 1rem;
  background-color: ${themes.colors.gray_50};
`;

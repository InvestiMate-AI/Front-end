import styled from "styled-components";
import themes from "./theme";

export const SimulationReportListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  margin: 0;
  padding: 1rem 2rem;
`;

export const SimulationReportItemLayout = styled.li`
  margin: 1rem;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  width: 1200px;
  min-height: 400px;
  border: solid ${themes.colors.gray_50};
  border-radius: 1rem;
  background-color: ${themes.colors.gray_50};
`;

export const SimulationReportChartLayout = styled.li`
  margin: 1rem;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;

  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */

  min-width: 1200px;
  min-height: 600px;
  border: solid ${themes.colors.gray_50};
  border-radius: 1rem;
  background-color: ${themes.colors.gray_50};
`;

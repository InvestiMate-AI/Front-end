import styled from "styled-components";
import themes from "./theme";

export const SimulationPageLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;

export const SimulationDashboardLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  flex: 1;
  overflow-y: auto;
`;

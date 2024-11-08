import styled from "styled-components";
import themes from "./theme";

export const CustomDateContainer = styled.div`
  position: relative;
`;

export const CustomDatePicker = styled.input`
  padding: 0.5rem 1rem;
  font-size: 1rem;

  border-radius: 1rem;
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  cursor: pointer;
  white-space: nowrap;

  background-color: ${themes.colors.white};
  max-height: 150px;
  margin: 0;
  box-shadow: 0 0 4px #d3d3d3;
`;

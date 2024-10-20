import styled from "styled-components";
import themes from "./theme";

export const CustomSelectContainer = styled.div`
  position: relative;
  width: 200px;
`;

export const CustomSelectTrigger = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  cursor: pointer;
`;

export const CustomSelectOptions = styled.ul`
  position: absolute;
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  max-height: 150px;
  overflow-y: auto;
  z-index: 1;
`;

export const CustomSelectOption = styled.li`
  padding: 10px;
  cursor: pointer;
  &:hover: {
    background-color: #f0f0f0;
  }
`;

import styled from "styled-components";
import themes from "./theme";

export const CustomSelectContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const CustomSelectTrigger = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
  background-color: ${themes.colors.white};
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
`;

export const CustomSelectOptions = styled.ul`
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  border-width: 0 1px 1px 1px;
  border-radius: 0 0 5px 5px;
  max-height: 150px;
  overflow-y: auto;
  z-index: 100;
  font-size: 1rem;
  position: absolute;
  top: 100%;
  margin: 0;
`;

export const CustomSelectOption = styled.li`
  padding: 10px;
  cursor: pointer;
  &:hover: {
    background-color: #f0f0f0;
  }
`;

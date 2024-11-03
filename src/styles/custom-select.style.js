import styled from "styled-components";
import themes from "./theme";

export const CustomSelectContainer = styled.div`
  position: relative;
`;

export const CustomSelectTrigger = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
  background-color: ${themes.colors.white};
  border-radius: 1rem;
  cursor: pointer;
  font-size: 1rem;
  box-shadow: 0 0 4px #d3d3d3;
  white-space: nowrap;
`;

export const CustomSelectOptions = styled.ul`
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  border-width: 0 1px 1px 1px;
  border-radius: 1rem;
  max-height: 150px;
  overflow-y: auto;
  z-index: 100;
  font-size: 1rem;
  position: absolute;
  top: 100%;
  margin: 0;
  box-shadow: 0 0 4px #d3d3d3;
  white-space: nowrap;
`;

export const CustomSelectOption = styled.li`
  padding: 0.5rem;
  white-space: nowrap;
  cursor: pointer;
  transition: color 0.5s ease;

  &:hover {
    color: ${(props) => props.hoverColor || "black"};
    background-color: #f0f0f0;
`;

import styled from "styled-components";
import themes from "./theme";

export const SimulationCreationLayout = styled.div`
  max-height: ${(props) =>
    props.isOpen ? "2000px" : "0px"}; // isOpen이 false면 숨기기

  overflow: ${(props) =>
    props.isOpen ? "visible" : "hidden"}; // isOpen이 false면 숨기기

  transition: max-height 0.3s ease-in-out;

  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin: 2rem 2rem 0.5rem 2rem;
`;

export const SimulationCreationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: stretch;
  width: 100%;
  max-width: 1200px;
  height: auto;
  background-color: ${themes.colors.gray_100};
  box-shadow: 0 0 4px gray;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  align-items: center; /* 세로 중앙 정렬 */
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: stretch;
  width: 100%;
  height: auto;
  align-items: center; /* 세로 중앙 정렬 */
  margin: 0.5rem 0;
`;

export const ItemContainer = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
  padding: 0 1rem;
  white-space: nowrap; /* 텍스트 줄바꿈 방지 */
  height: 100%;
  width: 100%;
`;

export const ItemHeading = styled.span`
  display: flex;
  align-items: center;
  width: auto;
  padding: 0 1rem;
`;

export const ItemPickerContainer = styled.span`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
`;

export const CreationButton = styled.button`
  width: 90%;
  padding: 0.5rem 1.5rem;
  margin: 0.5rem 0;
  background-color: skyblue;
  border: 1px solid #ccc;
  border-radius: 50px;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: rgb(211, 211, 211) 0px 0px 4px;

  transition:
    background-color 0.5s ease,
    color 0.5s ease;

  &:hover {
    background-color: #fff5cd;
    color: black;
  }
`;

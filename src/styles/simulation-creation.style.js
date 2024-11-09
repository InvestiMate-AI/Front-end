import styled from "styled-components";
import themes from "./theme";

export const SimulationCreationLayout = styled.div`
  max-height: ${(props) =>
    props.isOpen ? "2000px" : "0px"}; // isOpen이 false면 숨기기

  overflow: ${(props) =>
    props.isOpen ? "visible" : "hidden"}; // isOpen이 false면 숨기기

  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin: 2rem 2rem 0.5rem 2rem;
`;

export const SimulationCreationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
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
  width: 100%;
  padding: 0.5rem 1.5rem;
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

export const TradeOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* 가로 중앙 정렬 */
  align-items: start; /* 세로 중앙 정렬 */
  width: 100%;
  padding: 0 1rem;
`;

export const TradeOptionsHeader = styled.div``;

export const TradeOptionRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 0.5rem 1rem;
  margin: 0.25rem 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 50px;
  font-size: 1rem;
  box-shadow: rgb(211, 211, 211) 0px 0px 4px;
  position: relative; /* position 설정 */
`;

export const TradeOptionRowAddButton = styled.button`
  display: flex;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
  width: 100%;
  max-height: 20px;
  padding: 0.75rem 1.5rem;
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

export const TradeOptionCellSelectionContainer = styled.div`
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  border-width: 0 1px 1px 1px;
  max-height: 200px;
  overflow-y: hidden;
  z-index: 100;
  font-size: 1rem;
  position: absolute;
  top: 100%;
  margin: 0;
  border-radius: 1rem;
  box-sizing: border-box;
  cursor: pointer;
  white-space: nowrap;

  box-shadow: 0 0 4px #d3d3d3;
`;

export const SelectionButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 1rem;

  padding: 0.5rem 1rem;
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

export const TradeOptionSearchContainer = styled.div`
  position: relative;
  min-width: 12.5rem;
  white-space: nowrap; /* 텍스트 줄바꿈 방지 */
  text-overflow: ellipsis; /* 넘칠 경우 '...'으로 표시 */
`;

export const TradeOptionSearchInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  background: ${themes.colors.gray_100};
`;

export const TradeOptionSearchList = styled.ul`
  width: 100%;
  margin: 0;
  border: 1px solid #ccc;
  border-top: none;
  max-height: 200px;
  overflow-y: auto;
  background: ${themes.colors.gray_50};
  list-style: none;
`;

export const TradeOptionSearchListItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const TradeOptionCellAddButton = styled.div`
  display: flex;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
  max-height: 20px;
  padding: 0.75rem 0.5rem;
  margin: 0.25rem 0;
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

export const TradeOptionPickerConatiner = styled.div`
  display: flex;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
  max-height: 20px;
  padding: 0.75rem 0.5rem;
  margin: 0.25rem 0;
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

export const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: white;
  border-radius: 50px;
  font-size: 1rem;
  transition:
    background-color 0.5s ease,
    color 0.5s ease,
    box-shadow 0.5s ease;
  position: absolute; /* 절대 위치 설정 */
  right: 0; /* 우측 끝에 배치 */

  &:hover {
    background-color: red;
    color: black;
    box-shadow: rgb(211, 211, 211) 0px 0px 4px;
  }

  padding: 0.25rem;
  margin: 0 0.5rem;
`;

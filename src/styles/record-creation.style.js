import styled from "styled-components";
import themes from "./theme";

export const RecordCreationLayout = styled.div`
  display: flex;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
  width: 100%;
  min-width: 1200px;
  max-width: 1200px;
  height: auto;
  border-radius: 5px;
  margin: 2rem 2rem 0.5rem 2rem;
`;

export const RecordCreationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: stretch;
  width: 100%;
  max-width: 1200px;
  height: auto;
  background-color: ${themes.colors.gray_100};
  box-shadow: 0 0 4px gray;
  border-radius: 1rem;
  margin: 0 1rem;
  padding: 1rem;
  align-items: center; /* 세로 중앙 정렬 */
`;

export const ItemContainer = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
  padding: 0 1rem;
  white-space: nowrap; /* 텍스트 줄바꿈 방지 */
  height: 100%;
`;

export const ItemHeading = styled.span`
  display: flex;
  align-items: center;
  width: auto;
  padding: 0 1rem;
`;

export const ItemPickerContainer = styled.span`
  width: 100%;
`;

export const VolumeInput = styled.input`
  height: 40px;
  padding: 0.5rem;
  background-color: ${themes.colors.white};

  font-size: 1rem;
  width: 100%;
  border-radius: 1rem;
  max-height: 150px;
  overflow-y: auto;
  z-index: 100;
  top: 100%;
  margin: 0;
  box-shadow: 0 0 4px #d3d3d3;
  white-space: nowrap;
`;

export const CreationButton = styled.button`
  width: 100%;
  min-height: 40px;
  padding: 0.5rem 1.5rem;
  background-color: skyblue;
  border: 1px solid #ccc;
  border-radius: 50px;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0px 0px 4px #d3d3d3;

  transition:
    background-color 0.5s ease,
    color 0.5s ease;

  &:hover {
    background-color: #fff5cd;
    color: black;
  }
`;

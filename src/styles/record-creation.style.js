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
  align-items: start;
  width: 100%;
  max-width: 1200px;
  height: auto;
  background-color: ${themes.colors.gray_100};
  box-shadow: 0 0 4px gray;
  border-radius: 1rem;
  margin: 0 1rem;
  padding: 1rem;
`;

export const ItemContainer = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 0 1rem;
  white-space: nowrap; /* 텍스트 줄바꿈 방지 */
`;

export const ItemHeading = styled.span`
  display: flex;
  align-items: center;
  width: auto;
  padding: 0 1rem;
`;

export const ItemPickerContainer = styled.span``;

export const VolumeInput = styled.input`
  height: 100%;
  padding: 0.5rem;
  background-color: ${themes.colors.white};
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  font-size: 1rem;
`;

export const CreationButton = styled.button`
  width: 100%;
  height: 100%;
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

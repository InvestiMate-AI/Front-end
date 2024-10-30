import styled from "styled-components";
import themes from "./theme";

export const RecordCreationLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: start;
  width: 80%;
  min-width: 1200px
  height: auto;
  background-color: ${themes.colors.gray_100};
  border-radius: 5px;
  margin: 1rem 0;
  padding: 1rem;
`;

export const ItemContainer = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 0 1rem;
`;

export const ItemHeading = styled.span`
  display: flex;
  align-items: center;
  width: auto;
  padding: 0 1rem;
`;

export const ItemPickerContainer = styled.span``;

export const VolumeInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  background-color: ${themes.colors.white};
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

export const CreationButton = styled.button`
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  background-color: skyblue;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
`;

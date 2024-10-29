import styled from "styled-components";
import themes from "./theme";

export const RecordCreationLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  width: 100%;
  height: autp;
  padding: 1rem;
`;

export const ItemContainer = styled.span`
  display: flex;
  flex-direction: row;
`;

export const ItemHeading = styled.span`
  width: auto;
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
  background-color: ${themes.colors.white};
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
`;

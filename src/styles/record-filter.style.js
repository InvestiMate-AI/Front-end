import styled from "styled-components";
import themes from "./theme";

export const RecordFilterLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 100%;
  height: 100%;
  padding: 1rem;
`;

export const FilterItemContainer = styled.div`
  justify-content: start;
  width: 100%;
  margin: 0 0 1rem 0;
`;

export const FilterItemHeading = styled.h4`
  width: 100%
  height: auto;
  padding: 0;
  margin: 1rem 0 ;
`;

export const SelectionButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 1rem;
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

export const SelectionTypeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: left;
  width: 100%;
`;

export const SelectionName = styled.h3``;

export const selectionButton = styled.button``;

export const CorpSelectionContainer = styled.div`
  position: relative;
  min-width: 12.5rem;
  white-space: nowrap; /* 텍스트 줄바꿈 방지 */
  text-overflow: ellipsis; /* 넘칠 경우 '...'으로 표시 */
`;

export const SelectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  width: 100%;
  padding: 1rem;
  position: relative;
`;

export const CorpSearchContainer = styled.div`
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

export const CorpSearchInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  background: ${themes.colors.gray_100};
`;

export const CorpSearchList = styled.ul`
  width: 100%;
  margin: 0;
  border: 1px solid #ccc;
  border-top: none;
  max-height: 200px;
  overflow-y: auto;
  background: ${themes.colors.gray_50};
  list-style: none;
`;

export const CorpSearchListItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const OtherList = styled.ul`
  width: calc(100% - 2rem);
  top: calc(90% - 8px);
  left: 0;
  right: 0;
  margin: 0 1rem;
  border: 1px solid #ccc;
  border-top: none;
  max-height: 200px;
  overflow-y: auto;
  background: ${themes.colors.gray_50};
  list-style: none;
  position: absolute;
`;

export const OtherListItem = styled.li`
  padding: 0.75rem;
  border-bottom: 1px solid #ccc;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const createChatButton = styled.button`
  padding: 0.5rem 2rem;
  margin-top: 1rem;
  border: none;
  border-radius: 4px;
  background-color: ${themes.colors.gray_800};
  color: ${themes.colors.white};
  cursor: pointer;
`;

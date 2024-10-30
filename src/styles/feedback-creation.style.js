import styled from "styled-components";
import themes from "./theme";

export const FeedbackCreationLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex: 1;
`;

export const FeedbackCreationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: auto;
  border-radius: 10px;
  border: 1px solid ${themes.colors.gray_100};
  padding: 1rem;
  background: ${themes.colors.gray_50};
`;

export const Heading = styled.h1`
  margin: 1rem;
  padding: 1rem;
`;

export const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const SelectionButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.75rem;
  background-color: ${themes.colors.white};
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
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
  position: absolute;
  top: calc(90% - 4px);
  left: 0;
  right: 0;
  width: 100%;
  padding: 0 1rem;
  z-index: 1;
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

export const createFeedbackButton = styled.button`
  padding: 0.5rem 2rem;
  margin-top: 1rem;
  border: none;
  border-radius: 4px;
  background-color: ${themes.colors.gray_800};
  color: ${themes.colors.white};
  cursor: pointer;
`;

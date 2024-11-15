import styled from "styled-components";
import themes from "./theme";

export const ChatCreationLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex: 1;
`;

export const ChatCreationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: auto;
  background-color: ${themes.colors.gray_100};
  box-shadow: 0 0 4px gray;
  border-radius: 1rem;
  padding: 2rem 2.5rem;
  align-items: center; /* 세로 중앙 정렬 */
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
  border-radius: 1rem;
  cursor: pointer;
  font-size: 1rem;
  box-shadow: 0 0 4px #d3d3d3;
  white-space: nowrap;
`;

export const SelectionTypeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: left;
  width: 100%;
`;

export const SelectionName = styled.h3``;

export const SelectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  width: 100%;
  position: relative;
  margin: 1rem 0;
`;

export const CorpSearchContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1;
`;

export const CorpSearchInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 1rem;
  background: ${themes.colors.gray_100};
  box-shadow: 0 0 4px #d3d3d3;
`;

export const CorpSearchList = styled.ul`
  width: 100%;
  margin: 0;
  position: absolute;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 1rem;
  max-height: 200px;
  overflow-y: auto;
  background: ${themes.colors.gray_50};
  box-shadow: 0 0 4px #d3d3d3;
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
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  border-width: 0 1px 1px 1px;
  border-radius: 1rem;
  overflow-y: auto;
  z-index: 100;
  font-size: 1rem;
  position: absolute;
  top: 100%;
  margin: 0;
  box-shadow: 0 0 4px #d3d3d3;
  white-space: nowrap;
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

  margin: 2.5rem 1rem 0.5rem 1rem;
`;

import styled from "styled-components";

export const CreateChatLayout = styled.div`
  position: static;
  diplay: flex;
  flex-direction: row;
  justify-contenxt: center;
  flex: 2;
`;

export const DropdownContainer = styled.div`
  position: relative;
  width: 300px;
  margin-bottom: 20px;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
`;

export const DropdownList = styled.ul`
  position: absolute;
  width: 100%;
  border: 1px solid #ccc;
  border-top: none;
  max-height: 200px;
  overflow-y: auto;
  background-color: white;
  list-style: none;
  margin: 0;
  padding: 0;
  z-index: 1;
`;

export const DropdownListItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

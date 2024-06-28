import styled from "styled-components";

export const ChatContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80%;
`;

export const MessageInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
`;

export const StyledMessageInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 90%;
`;

export const SendButton = styled.button`
  margin-left: 10px;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const MessagesContainer = styled.div`
  margin: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 300px;
  overflow-y: auto;
`;

export const Message = styled.div`
  margin: 10px 0;
  padding: 10px;
  background-color: #f1f1f1;
  border-radius: 4px;
`;

import styled from "styled-components";
import { IoSend } from "react-icons/io5";
import { clear } from "@testing-library/user-event/dist/clear";

export const ChatLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const ChatBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  height: 100%;
`;

export const UserMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export const BotMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export const MessageInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50rem;
`;

export const StyledMessageInput = styled.input`
  width: 80%;
  height: 2rem;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem;
  margin-right: 0.5rem;
`;

export const SendIcon = styled(IoSend)`
  background-color: green;
  border-radius: 0.5rem;
  padding: 0.5rem;
  width: 2rem;
  height: 2rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3; /* 호버 시 배경색 변경 */
  }
`;

export const SidebarContainer = styled.div`
  width: ${(props) => (props.isOpen ? "250px" : "0px")};
  transition: width 0.3s ease-in-out;
  overflow: hidden;
  border-right: 1px solid #e0e0e0;
`;

export const ToggleButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
`;

export const MessageInput = ({ onSendMessage }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSendMessage();
      clear();
    }
  };

  return (
    <MessageInputContainer>
      <StyledMessageInput onKeyDown={handleKeyDown} />
      <SendIcon onClick={onSendMessage} />
    </MessageInputContainer>
  );
};

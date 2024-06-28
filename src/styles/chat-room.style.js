import styled from "styled-components";
import themes from "./theme";

export const ChatRoomLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex: 1;
`;

export const ChatRoomMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const MessagesContainer = styled.div`
  margin: 20px;
  padding: 10px;
  flex: 1;
  width: 800px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

export const BotMessageItem = styled.div`
  margin: 10px 0;
  padding: 10px;
  background-color: ${themes.colors.white};
  border-radius: 4px;
  align-self: flex-start;
`;

export const UserMessageItem = styled.div`
  margin: 10px 0;
  padding: 10px;
  background-color: ${themes.colors.gray_75};
  border-radius: 4px;
  align-self: flex-end;
`;

export const ChatRoomFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100%;
`;

export const MessageInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 800px;
  min-width: 300px;
  border-radius: 1rem;
  padding: 0.25rem 0.5rem;
  background: ${themes.colors.gray_75};
`;

// TODO: input에서 textarea로 변경
export const MessageInput = styled.input`
  flex: 1;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0);
  font: ${themes.fonts.font_lg};
`;

export const SendButton = styled.button`
  padding: 0.75rem;
  margin: 0.25rem 0;
  border: none;
  border-radius: 32px;
  background-color: ${themes.colors.gray_800};
  color: ${themes.colors.white};
  cursor: pointer;
`;

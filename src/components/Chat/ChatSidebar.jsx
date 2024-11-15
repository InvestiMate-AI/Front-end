import React, { useState } from "react";
import * as S from "../../styles/sidebar.style";
import ChatListItem from "./ChatListItem";
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";
import Spinner from "../../styles/spinner.style";

const ChatSidebar = ({
  chatList,
  onChatItemClick,
  onCreateNewChat,
  onDeleteChat,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <S.SidebarLayout>
      <S.SidebarContainer isOpen={isOpen}>
        <S.CreateNewChat onClick={onCreateNewChat} text="새로운 채팅" />
        <S.ChatItemsContainer>
          {chatList?.map((chat, index) => (
            <ChatListItem
              key={index}
              chat={chat}
              onClick={() => onChatItemClick(chat)}
              onDeleteChat={() => onDeleteChat(chat.chatRoomId)} // 삭제 핸들러 전달
            />
          ))}
        </S.ChatItemsContainer>
        <S.Settings />
      </S.SidebarContainer>
      <S.ToggleButton onClick={toggleSidebar}>
        {isOpen ? <IoChevronBackOutline /> : <IoChevronForwardOutline />}
      </S.ToggleButton>
    </S.SidebarLayout>
  );
};

export default ChatSidebar;

import React, { useState } from "react";
import * as S from "../../styles/sidebar.style";
import ChatListItem from "./ChatListItem";
import { getMessages } from "../../apis/chat";
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";

const Sidebar = ({ chatList, setSelectedChat }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const handleCreateNewChat = () => {
    setSelectedChat(null);
  };

  const handleChatListItemClick = (chat) => {
    setSelectedChat(chat);
    console.log(`선택된 chat 정보 \n${JSON.stringify(chat)}`);
    const response = getMessages(chat.chatRoomId);
    console.log(response);
    let res = async () => {};
  };

  return (
    <>
      <S.SidebarLayout>
        <S.SidebarContainer isOpen={isOpen}>
          <S.CreateNewChat onClick={handleCreateNewChat} />
          <S.ChatItemsContainer>
            {chatList.map((chat, index) => (
              <ChatListItem
                key={index}
                chat={chat}
                onClick={() => handleChatListItemClick(chat)}
              />
            ))}
          </S.ChatItemsContainer>
          <S.Settings />
        </S.SidebarContainer>
        <S.ToggleButton onClick={toggleSidebar}>
          {isOpen ? <IoChevronBackOutline /> : <IoChevronForwardOutline />}
        </S.ToggleButton>
      </S.SidebarLayout>
    </>
  );
};

export default Sidebar;

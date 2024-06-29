import React, { useState } from "react";
import * as S from "../../styles/sidebar.style";
import ChatListItem from "./ChatListItem";
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";

const Sidebar = ({ chatList, onChatItemClick, onCreateNewChat }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <S.SidebarLayout>
        <S.SidebarContainer isOpen={isOpen}>
          <S.CreateNewChat onClick={onCreateNewChat} />
          <S.ChatItemsContainer>
            {chatList.map((chat, index) => (
              <ChatListItem
                key={index}
                chat={chat}
                onClick={() => onChatItemClick(chat)}
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

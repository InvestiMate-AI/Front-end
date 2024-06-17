import React from "react";
import * as S from "../../styles/sidebar.style";
import ChatListItem from "./ChatListItem";

const Sidebar = ({ chatList, setSelectedChat }) => {
  const handleCreateNewChat = () => {
    setSelectedChat(null);
  };

  const handleChatListItemClick = (chat) => {
    setSelectedChat(chat);
    console.log(`선택된 chat 정보`);
    console.log(chat);
  };

  return (
    <>
      <S.SidebarLayout>
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
      </S.SidebarLayout>
    </>
  );
};

export default Sidebar;

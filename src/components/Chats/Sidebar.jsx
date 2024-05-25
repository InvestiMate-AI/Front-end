import React from "react";
import * as S from "../../styles/sidebar.style";
import ChatListItem from "./ChatListItem";

const Sidebar = ({ chatList, setSelectedChat }) => {
  const handleCreateNewChat = () => {
    setSelectedChat(null);
  };

  const handleChatListItemClick = (chat) => {
    setSelectedChat(chat);
  };

  return (
    <>
      <S.SidebarLayout>
        <S.CreateNewChat onClick={handleCreateNewChat} />
        <div className="chat-items-container">
          {chatList.map((chat, index) => (
            <ChatListItem
              key={index}
              chat={chat}
              onClick={() => handleChatListItemClick(chat)}
            />
          ))}
        </div>
        <S.Settings />
      </S.SidebarLayout>
    </>
  );
};

export default Sidebar;

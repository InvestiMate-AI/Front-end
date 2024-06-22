import React from "react";
import * as S from "../../styles/sidebar.style";
import ChatListItem from "./ChatListItem";
import { getMessages } from "../../apis/chat";

const Sidebar = ({ chatList, setSelectedChat }) => {
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

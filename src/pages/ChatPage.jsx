import React, { useState, useContext } from "react";
import * as C from "../styles/chat.style";
import DefaultLayout from "../components/Layout/DefaultLayout";
import Sidebar from "../components/Chat/ChatSidebar";
import ChatCreation from "../components/Chat/ChatCreation";
import { getThreads, deleteThread } from "../apis/chat";
import { useNavigate } from "react-router-dom";
import { ChatProvider, ChatContext } from "../components/Chat/ChatContext";

function ChatPage() {
  const [selectedChat, setSelectedChat] = useState(null);
  const { chatList, setChatList } = useContext(ChatContext); // ChatContext 사용
  const navigate = useNavigate();

  const handleDeleteChat = async (chatRoomId) => {
    try {
      await deleteThread(chatRoomId);
      setChatList((prevChatList) =>
        prevChatList.filter((chat) => chat.chatRoomId !== chatRoomId)
      );
    } catch (error) {
      console.error("Error deleting chat:", error);
    }
  };

  const handleChatListItemClick = (chat) => {
    navigate(`/chat/${chat.chatRoomId}`);
  };

  const handleCreateNewChat = () => {
    navigate("/chat");
  };

  return (
    <DefaultLayout>
      <C.ChatLayout>
        <Sidebar
          setSelectedChat={setSelectedChat}
          onChatItemClick={handleChatListItemClick}
          onCreateNewChat={handleCreateNewChat}
          onDeleteChat={handleDeleteChat} // 삭제 핸들러 추가
        />
        {!selectedChat && <ChatCreation />}
      </C.ChatLayout>
    </DefaultLayout>
  );
}
export default ChatPage;

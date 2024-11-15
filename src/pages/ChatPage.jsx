import React, { useState, useEffect } from "react";
import * as C from "../styles/chat.style";
import DefaultLayout from "../components/Layout/DefaultLayout";
import Sidebar from "../components/Chat/ChatSidebar";
import ChatCreation from "../components/Chat/ChatCreation";
import { getThreads, deleteThread } from "../apis/chat";
import { useNavigate } from "react-router-dom";
import { ChatProvider } from "../components/Chat/ChatContext";

function ChatPage() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [chatList, setChatList] = useState([]);
  const navigate = useNavigate();

  const fetchChatList = async () => {
    const threadsData = await getThreads();
    setChatList(threadsData);
    console.log(threadsData);
  };

  useEffect(() => {
    fetchChatList();
  }, []);

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
    <ChatProvider>
      <DefaultLayout>
        <C.ChatLayout>
          <Sidebar
            chatList={chatList}
            setSelectedChat={setSelectedChat}
            onChatItemClick={handleChatListItemClick}
            onCreateNewChat={handleCreateNewChat}
            onDeleteChat={handleDeleteChat} // 삭제 핸들러 추가
          />
          {!selectedChat && <ChatCreation />}
        </C.ChatLayout>
      </DefaultLayout>
    </ChatProvider>
  );
}
export default ChatPage;

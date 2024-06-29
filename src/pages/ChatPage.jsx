import React, { useState, useEffect } from "react";
import * as C from "../styles/chat.style";
import DefaultLayout from "../components/Layout/DefaultLayout";
import Sidebar from "../components/Chat/Sidebar";
import ChatCreation from "../components/Chat/ChatCreation";
import { getThreads } from "../apis/chat";
import { useNavigate } from "react-router-dom";

function ChatPage() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [chatList, setChatList] = useState([]);
  const navigate = useNavigate();

  const addChatToChatList = (newThread) => {
    setChatList((prevList) => [...prevList, newThread]);
  };

  useEffect(() => {
    const fetchChatList = async () => {
      const threadsData = await getThreads();
      setChatList(threadsData);
    };

    fetchChatList();
  }, []);

  const handleChatListItemClick = (chat) => {
    navigate(`/chat/${chat.chatRoomId}`);
  };

  const handleCreateNewChat = () => {
    navigate("/chat");
  };

  return (
    <>
      <DefaultLayout>
        <C.ChatLayout>
          <Sidebar
            setSelectedChat={setSelectedChat}
            chatList={chatList}
            onChatItemClick={handleChatListItemClick}
            onCreateNewChat={handleCreateNewChat}
          />
          {!selectedChat && (
            <ChatCreation addChatToChatList={addChatToChatList} />
          )}
        </C.ChatLayout>
      </DefaultLayout>
    </>
  );
}

export default ChatPage;

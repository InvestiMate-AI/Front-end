import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import * as C from "../styles/chat.style";
import DefaultLayout from "../components/Layout/DefaultLayout";
import Sidebar from "../components/Chat/ChatSidebar";
import ChatRoom from "../components/Chat/ChatRoom";
import { getThreads, deleteThread } from "../apis/chat";
import { useNavigate } from "react-router-dom";
import { ChatProvider, ChatContext } from "../components/Chat/ChatContext";

function ChatRoomPage() {
  const { chatRoomId } = useParams();
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

  const fetchChatList = async () => {
    const threadsData = await getThreads();
    setChatList(threadsData);
    console.log(threadsData);

    // Find the selected chat from the fetched chat list using chatRoomId
    const selected = threadsData.find((chat) => {
      if (chat.chatRoomId == chatRoomId) {
        return chat;
      } else {
        return null;
      }
    });
    setSelectedChat(selected);
  };

  useEffect(() => {
    fetchChatList();
  }, [chatRoomId]);

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
        {selectedChat && (
          <ChatRoom
            threadId={selectedChat.threadId}
            assistantId={selectedChat.assistantId}
            chatRoomId={selectedChat.chatRoomId}
          />
        )}
      </C.ChatLayout>
    </DefaultLayout>
  );
}

export default ChatRoomPage;

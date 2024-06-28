import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as C from "../styles/chat.style";
import DefaultLayout from "../components/Layout/DefaultLayout";
import Sidebar from "../components/Chat/Sidebar";
import ChatRoom from "../components/Chat/ChatRoom";
import { getThreads } from "../apis/chat";
import { useNavigate } from "react-router-dom";

function ChatRoomPage() {
  const { roomId } = useParams();
  const [selectedChat, setSelectedChat] = useState(null);
  const [chatList, setChatList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchChatList = async () => {
      const threadsData = await getThreads();
      const formattedData = threadsData.map((thread) => ({
        chatRoomId: thread.chatRoomId,
        reportCompany: thread.reportCompany,
        reportType: thread.reportType,
        reportYear: thread.reportYear,
        threadId: thread.threadId,
        assistantId: thread.assistantId,
      }));
      setChatList(formattedData);

      // Find the selected chat from the fetched chat list using roomId
      const selected = formattedData.find((chat) => chat.threadId === roomId);
      setSelectedChat(selected);
    };

    fetchChatList();
  }, [roomId]);

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
          chatList={chatList}
          onChatItemClick={handleChatListItemClick}
          onCreateNewChat={handleCreateNewChat}
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

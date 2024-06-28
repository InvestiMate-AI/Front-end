import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as C from "../styles/chat.style";
import DefaultLayout from "../components/Layout/DefaultLayout";
import Sidebar from "../components/Chat/Sidebar";
import ChatRoom from "../components/Chat/ChatRoom";
import { getThreads } from "../apis/chat";
import { useNavigate } from "react-router-dom";

function ChatRoomPage() {
  const { chatRoomId } = useParams();
  const [selectedChat, setSelectedChat] = useState(null);
  const [chatList, setChatList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchChatList = async () => {
      const threadsData = await getThreads();
      console.log("threadsData:", threadsData); // API 호출 결과 확인

      const formattedData = threadsData.map((thread) => ({
        chatRoomId: thread.chatRoomId,
        reportCompany: thread.reportCompany,
        reportType: thread.reportType,
        reportYear: thread.reportYear,
        threadId: thread.threadId,
        assistantId: thread.assistantId,
      }));
      console.log("formattedData:", formattedData); // 데이터 형성 결과 확인

      setChatList(formattedData);

      // Find the selected chat from the fetched chat list using chatRoomId
      const selected = formattedData.find((chat) => {
        if (chat.chatRoomId == chatRoomId) {
          console.log(chat);
          return chat;
        }
      });
      setSelectedChat(selected);
    };

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

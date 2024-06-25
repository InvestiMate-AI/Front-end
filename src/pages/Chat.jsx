import React, { useState, useEffect } from "react";
import * as C from "../styles/chat.style";
import DefaultLayout from "../components/Layout/DefaultLayout";
import Sidebar from "../components/Chat/Sidebar";
import MessageInput from "../components/Chat/MessageInput";
import ReportSelection from "../components/Chat/CreateChat";
import { getThreads } from "../apis/chat";

function Chat() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [chatList, setChatList] = useState([]);

  const addChatToChatList = (newThread) => {
    setChatList((prevList) => [...prevList, newThread]);
  };

  const reportTypes = {
    11011: "사업보고서",
    11012: "반기보고서",
    11013: "1분기보고서",
    11014: "3분기보고서",
  };

  useEffect(() => {
    const fetchChatList = async () => {
      const threadsData = await getThreads();
      console.log(threadsData);
      // Format the thread data to match chatList structure
      const formattedData = threadsData.map((thread) => ({
        chatRoomId: thread.chatRoomId,
        reportCompany: thread.reportCompany,
        reportType: thread.reportType,
        reportYear: thread.reportYear,
        threadId: thread.threadId,
        assistantId: thread.assistantId,
      }));

      setChatList(formattedData);
    };

    fetchChatList();
  }, []);

  return (
    <>
      <DefaultLayout>
        <C.ChatLayout>
          <Sidebar setSelectedChat={setSelectedChat} chatList={chatList} />
          {selectedChat ? (
            <MessageInput
              threadId={selectedChat.threadId}
              assistantId={selectedChat.assistantId}
              chatRoomId={selectedChat.chatRoomId}
            />
          ) : (
            <ReportSelection addChatToChatList={addChatToChatList} />
          )}
        </C.ChatLayout>
      </DefaultLayout>
    </>
  );
}

export default Chat;

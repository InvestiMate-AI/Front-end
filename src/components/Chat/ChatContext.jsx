import React, { createContext, useState, useEffect } from "react";
import { getThreads } from "../../apis/chat";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [chatList, setChatList] = useState([]);

  const fetchChatList = async () => {
    try {
      const threadsData = await getThreads();
      setChatList(threadsData);
      console.log("ChatContext initialized:", chatList);
    } catch (error) {
      console.error("Error fetching chat list:", error);
    }
  };

  useEffect(() => {
    fetchChatList(); // 컴포넌트 마운트 시 한 번 실행
  }, []);

  return (
    <ChatContext.Provider value={{ chatList, setChatList, fetchChatList }}>
      {children}
    </ChatContext.Provider>
  );
};

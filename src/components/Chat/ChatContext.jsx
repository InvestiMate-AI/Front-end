import React, { createContext, useState } from "react";
import { getThreads } from "../../apis/chat";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [chatList, setChatList] = useState([]);

  const fetchChatList = async () => {
    console.log("sadasd");
    const threadsData = await getThreads();
    setChatList(threadsData);
  };

  return (
    <ChatContext.Provider value={{ chatList, fetchChatList }}>
      {children}
    </ChatContext.Provider>
  );
};

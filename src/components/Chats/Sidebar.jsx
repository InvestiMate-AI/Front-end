import React, { useState, useEffect } from "react";
import * as S from "../../styles/sidebar.style";
import ChatListItem from "./ChatListItem";
import axios from "axios";

export default function Sidebar({ setSelectedChat }) {
  const [chatList, setChatList] = useState([]);

  useEffect(() => {
    const fetchThreadData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/threads");
        const threadData = response.data;

        // threadData를 chatList 형식에 맞게 변환
        const formattedData = threadData.map((thread) => ({
          reportType: `${thread.corp_code} ${thread.bsns_year}년 ${getReportType(thread.reprt_code)}`,
          lastChatDate: new Date().toISOString().split("T")[0], // 오늘 날짜로 설정
          title: `Thread ID: ${thread.thread_id}`,
        }));

        setChatList(formattedData);
        console.log(response);
      } catch (error) {
        console.error("Error fetching thread data:", error);
      }
    };

    fetchThreadData();
  }, []);

  // 보고서 코드에 따라 보고서 유형을 반환하는 함수
  const getReportType = (reprt_code) => {
    switch (reprt_code) {
      case "11011":
        return "사업보고서";
      case "11012":
        return "반기보고서";
      case "11013":
        return "1분기보고서";
      case "11014":
        return "3분기보고서";
      default:
        return "알 수 없음";
    }
  };

  const handleCreateNewChat = () => {
    setSelectedChat(null);
  };

  const handleChatListItemClick = (chat) => {
    setSelectedChat(chat);
  };

  return (
    <>
      <S.SidebarLayout>
        <S.CreateNewChat onClick={handleCreateNewChat} />
        <div className="chat-items-container">
          {chatList.map((chat, index) => (
            <ChatListItem
              key={index}
              chat={chat}
              onClick={() => handleChatListItemClick(chat)}
            />
          ))}
        </div>
        <S.Settings />
      </S.SidebarLayout>
    </>
  );
}

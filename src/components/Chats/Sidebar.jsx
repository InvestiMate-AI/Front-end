import React, { useState } from "react";
import * as S from "../../styles/sidebar.style";
import ChatItem from "./ChatItem";

export default function Sidebar() {
  const chatList = [
    // 더미데이터
    {
      reportType: "삼성전자 2023년 정기보고서",
      lastChatDate: "2024-05-09",
      title: "배당 정보 요청",
    },
    {
      reportType: "현대자동차 2023년 정기보고서",
      lastChatDate: "2024-05-07",
      title: "최근 수익 정보",
    },
    {
      reportType: "LG전자 2023년 정기보고서",
      lastChatDate: "2024-04-30",
      title: "재무 안정성 정보 요청",
    },
  ];

  return (
    <>
      <S.SidebarLayout>
        <S.CreateNewChat />
        <div className="chat-items-container">
          {chatList.map((chat, index) => (
            <ChatItem key={index} chat={chat} />
          ))}
        </div>
        <S.Settings />
      </S.SidebarLayout>
    </>
  );
}

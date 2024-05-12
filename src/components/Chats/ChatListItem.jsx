import React from "react";
import * as C from "../../styles/chat-list-item.style";

export default function ChatItem({ chat }) {
  return (
    <>
      <C.ChatItemLayout>
        <div className="chat-item-header">
          <div>{chat.reportType}</div>
          <div>{chat.lastChatDate}</div>
        </div>
        <div className="chat-item-content">
          {chat.title}
          <C.OptionsButton />
        </div>
      </C.ChatItemLayout>
    </>
  );
}

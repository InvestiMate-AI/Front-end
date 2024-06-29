import React from "react";
import * as C from "../../styles/chat-list-item.style";

export default function ChatListItem({ chat, onClick }) {
  return (
    <>
      <C.ChatItemLayout onClick={onClick}>
        <div className="chat-item-header">
          <div>
            {chat.reportCompany} {chat.reportYear}년 {chat.reportType}
          </div>
          {/* <div>{chat.lastChatDate}</div> */}
        </div>
        <div className="chat-item-content">
          {/* {chat.title} */}
          {/* <C.OptionsButton /> */}
        </div>
      </C.ChatItemLayout>
    </>
  );
}

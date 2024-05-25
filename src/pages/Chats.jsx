import React, { useState, useEffect } from "react";
// import DefaultLayout from "../components/DefaultLayout";
import * as C from "../styles/chats.style";

import DefaultLayout from "../components/DefaultLayout";
import Sidebar from "../components/Chats/Sidebar";
import MessageInput from "../components/Chats/MessageInput";
import CorpSearch from "../components/Chats/CorpSearch";
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";

function Chats() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const handleSendMessage = () => {
    // 메시지 보내는 로직을 추가해주세요.
    console.log("메시지 전송");
  };

  return (
    <>
      <DefaultLayout>
        <C.ChatLayout>
          <C.SidebarContainer isOpen={isOpen}>
            <Sidebar />
          </C.SidebarContainer>
          <C.ToggleButton onClick={toggleSidebar}>
            {isOpen ? <IoChevronBackOutline /> : <IoChevronForwardOutline />}
          </C.ToggleButton>
          <CorpSearch />
          <MessageInput />
          {/* <C.ChatBox>
            hello
            <C.MessageInput onSendMessage={handleSendMessage}></C.MessageInput>
          </C.ChatBox> */}
        </C.ChatLayout>
      </DefaultLayout>
    </>
  );
}

export default Chats;

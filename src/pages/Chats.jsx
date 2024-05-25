import React, { useState } from "react";
import * as C from "../styles/chats.style";
import DefaultLayout from "../components/DefaultLayout";
import Sidebar from "../components/Chats/Sidebar";
import MessageInput from "../components/Chats/MessageInput";
import CorpSearch from "../components/Chats/CorpSearch";
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";

function Chats() {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedChat, setSelectedChat] = useState(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <>
      <DefaultLayout>
        <C.ChatLayout>
          <C.SidebarContainer isOpen={isOpen}>
            <Sidebar setSelectedChat={setSelectedChat} />
          </C.SidebarContainer>
          <C.ToggleButton onClick={toggleSidebar}>
            {isOpen ? <IoChevronBackOutline /> : <IoChevronForwardOutline />}
          </C.ToggleButton>
          {selectedChat ? <MessageInput /> : <CorpSearch />}
        </C.ChatLayout>
      </DefaultLayout>
    </>
  );
}

export default Chats;

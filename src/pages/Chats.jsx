import React, { useState, useEffect } from "react";
// import DefaultLayout from "../components/DefaultLayout";
import * as C from "../styles/chats.style";

import DefaultLayout from "../components/DefaultLayout";
import Sidebar from "../components/Chats/Sidebar";
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";

function Chats() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
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
          <C.ChatContainer></C.ChatContainer>
        </C.ChatLayout>
      </DefaultLayout>
    </>
  );
}

export default Chats;

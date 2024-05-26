import React, { useState, useEffect } from "react";
import * as C from "../styles/chats.style";
import DefaultLayout from "../components/DefaultLayout";
import Sidebar from "../components/Chats/Sidebar";
import MessageInput from "../components/Chats/MessageInput";
import CorpSearch from "../components/Chats/CorpSearch";
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";
import axios from "axios";

function Chats() {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedChat, setSelectedChat] = useState(null);
  const [chatList, setChatList] = useState([]);

  const addChatToChatList = (newThread) => {
    setChatList((prevList) => [...prevList, newThread]);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const reportTypes = {
    11011: "사업보고서",
    11012: "반기보고서",
    11013: "1분기보고서",
    11014: "3분기보고서",
  };

  useEffect(() => {
    const fetchChatList = async () => {
      try {
        const response = await axios.get("http://localhost:5000/threads");
        const threadData = response.data;

        // Format the thread data to match chatList structure
        const formattedData = threadData.map((thread) => ({
          corp_code: thread.corp_code,
          bsns_year: thread.bsns_year,
          reprt_code: thread.reprt_code,
          assistant_id: thread.assistant_id,
          thread_id: thread.thread_id,
          reportType: `${thread.corp_code} ${thread.bsns_year}년 ${reportTypes[thread.reprt_code]}`,
          lastChatDate: new Date().toISOString().split("T")[0], // Set to today's date
          title: `Thread ID: ${thread.thread_id}`,
        }));

        setChatList(formattedData);
        console.log(formattedData);
      } catch (error) {
        console.error("Error fetching chat list:", error);
      }
    };

    fetchChatList();
  }, []);

  return (
    <>
      <DefaultLayout>
        <C.ChatLayout>
          <C.SidebarContainer isOpen={isOpen}>
            <Sidebar setSelectedChat={setSelectedChat} chatList={chatList} />
          </C.SidebarContainer>
          <C.ToggleButton onClick={toggleSidebar}>
            {isOpen ? <IoChevronBackOutline /> : <IoChevronForwardOutline />}
          </C.ToggleButton>
          {selectedChat ? (
            <MessageInput
              thread_id={selectedChat.thread_id}
              assistant_id={selectedChat.assistant_id}
            />
          ) : (
            <CorpSearch addChatToChatList={addChatToChatList} />
          )}
        </C.ChatLayout>
      </DefaultLayout>
    </>
  );
}

export default Chats;

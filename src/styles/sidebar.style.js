import styled from "styled-components";

import { IoSettingsOutline } from "react-icons/io5";
import { IoAddOutline } from "react-icons/io5";

export const SidebarLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 16rem;
`;

export const ChatItemsContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const CreateNewChatButton = styled.button`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  margin: 1rem;
  padding: 1rem 3rem;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  cursor: pointer;
`;

const SettingsButton = styled.button`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  margin: 1rem;
  padding: 1rem 3rem;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  cursor: pointer;
`;

export const CreateNewChat = ({ onClick }) => (
  <>
    <CreateNewChatButton onClick={onClick}>
      {" "}
      {/* Attach onClick to button */}
      <IoAddOutline />
      <span style={{ marginLeft: "0.5rem" }}>새로운 채팅</span>
    </CreateNewChatButton>
  </>
);

export const Settings = () => (
  <>
    <SettingsButton>
      <IoSettingsOutline />
      <span style={{ marginLeft: "0.5rem" }}>설정</span>
    </SettingsButton>
  </>
);

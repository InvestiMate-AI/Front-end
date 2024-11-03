import styled from "styled-components";

import { IoSettingsOutline } from "react-icons/io5";
import { IoAddOutline } from "react-icons/io5";
import themes from "./theme";

export const SidebarLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  white-space: nowrap; /* 텍스트 줄바꿈 방지 */
  overflow-x: hidden;
`;

export const SidebarContainer = styled.div`
  width: ${(props) => (props.isOpen ? "250px" : "0px")};
  transition: width 0.3s ease-in-out;
  overflow: hidden;
  border-right: 1px solid #e0e0e0;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${themes.colors.gray_50};
`;

export const ToggleButton = styled.button`
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
  cursor: pointer;
  background: none;
  border: none;
  border-radius: 0.5rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${themes.colors.gray_200};
  }
`;

export const ChatItemsContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
`;

const CreateNewChatButton = styled.button`
  align-items: center;
  margin: 1rem;
  padding: 1rem 3rem;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  cursor: pointer;
  white-space: nowrap;
  font-weight: 500;

  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${themes.colors.gray_200};
  }
`;

const SettingsButton = styled.button`
  align-items: center;
  margin: 1rem;
  padding: 1rem 3rem;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  cursor: pointer;
  white-space: nowrap;

  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${themes.colors.gray_200};
  }
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

export const MenuContainer = styled.div`
  font-weight: 900;
  font-size: 1.25rem;
  display: flex;
  flex: 1 1 auto;
`;

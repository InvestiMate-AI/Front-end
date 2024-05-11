import styled from "styled-components";

export const ChatLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export const SidebarContainer = styled.div`
  width: ${(props) => (props.isOpen ? "250px" : "0px")};
  transition: width 0.3s ease-in-out;
  overflow: hidden;
  border-right: 1px solid #e0e0e0;
`;

export const ToggleButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
`;

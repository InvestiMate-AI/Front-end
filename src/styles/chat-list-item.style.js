import styled from "styled-components";
import { IoEllipsisVertical } from "react-icons/io5";
import themes from "./theme";

export const ChatItemLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 90%;
  margin: 0.5rem 0.5rem 0 0.5rem;
  font-size: 0.875rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:hover {
    background-color: ${themes.colors.gray_200}; /* hover 시 배경색 */
  }

  .chat-item-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    width: 100%; /* 부모의 너비에 맞춤 */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .chat-item-content {
    display: flex;
    align-items: left;
    gap: 1rem;
    white-space: nowrap;
  }
`;

export const ChatItemButtonContainer = styled.div`
  justifycontent: "flex-end";
  alignitems: "center";
`;

export const ChatItemButton = styled.button`
  cursor: pointer;
  padding: 0;
  margin: 0;
  color: gray; /* 기본 색상 */

  transition: color 0.5s ease;

  &:hover {
    color: black; /* 호버 시 색상 변경 */
  }
`;

// 부모 Flex row 설정에 따른 스타일 추가
export const ChatItemRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%; /* 부모 너비에 맞춤 */
  align-items: center;
  justify-content: space-between;
`;

export const ChatItemColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 2rem); /* Button space */
  overflow: hidden;
  position: relative; /* Set relative position to allow ::after positioning */

  &::after {
    border-radius: 0.5rem;
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 2rem; /* Width of the fade-out effect */
    height: 100%;
    background: linear-gradient(
      to left,
      ${themes.colors.gray_50},
      transparent
    ); /* 기본 배경색을 흰색으로 설정 */
    pointer-events: none; /* Prevent ::after from blocking clicks */
    transition: background 0.5s ease;
  }

  /* Remove gradient effect on hover */
  ${ChatItemLayout}:hover &::after {
    background: none;
  }
`;

export const OptionsButton = () => <IoEllipsisVertical />;

export const PopUpMenuButton = styled.button`
  margin: 0 0 1rem 0;
  white-space: nowrap;
  cursor: pointer;
  color: ${(props) =>
    props.color || "initial"}; // 전달된 color prop 사용, 없으면 기본값
  transition: color 0.5s ease;

  &:hover {
    color: ${(props) => props.hoverColor || "black"};
  }
`;

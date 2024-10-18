import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io5";
import { IoAddOutline } from "react-icons/io5";
import { IoEllipsisVertical } from "react-icons/io5";
import themes from "./theme";

export const ChatItemLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin: 0 auto;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${themes.colors.gray_200};
  }

  .chat-item-header {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
    white-space: nowrap;
  }

  .chat-item-content {
    display: flex;
    align-items: left;
    gap: 1rem;
    white-space: nowrap;
  }
`;

export const OptionsButton = () => (
  <>
    <IoEllipsisVertical />
  </>
);

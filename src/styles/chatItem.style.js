import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io5";
import { IoAddOutline } from "react-icons/io5";
import { IoEllipsisVertical } from "react-icons/io5";

export const ChatItemLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem;
  margin: 1rem;
  border-radius: 10px;
  cursor: pointer;

  .chat-item-header {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
  }

  .chat-item-content {
    display: flex;
    align-items: left;
    gap: 1rem;
  }
`;

export const OptionsButton = () => (
  <>
    <IoEllipsisVertical />
  </>
);

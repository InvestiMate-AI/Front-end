import React, { useEffect, useState } from "react";
import * as S from "../../styles/sidebar.style";
import FeedbackListItem from "./FeedbackListItem";
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";

const FeedbackSidebar = ({ feedbackList }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    console.log(feedbackList);
  });

  return (
    <>
      <S.SidebarLayout>
        <S.SidebarContainer isOpen={isOpen}>
          <S.ChatItemsContainer>
            {feedbackList.map((feedback, index) => (
              <FeedbackListItem key={index} feedback={feedback} />
            ))}
          </S.ChatItemsContainer>
          <S.Settings />
        </S.SidebarContainer>
        <S.ToggleButton onClick={toggleSidebar}>
          {isOpen ? <IoChevronBackOutline /> : <IoChevronForwardOutline />}
        </S.ToggleButton>
      </S.SidebarLayout>
    </>
  );
};

export default FeedbackSidebar;

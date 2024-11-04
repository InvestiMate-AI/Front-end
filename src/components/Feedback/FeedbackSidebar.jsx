import React, { useEffect, useState } from "react";
import * as S from "../../styles/sidebar.style";
import FeedbackListItem from "./FeedbackListItem";
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";

const FeedbackSidebar = ({
  stockRecordsWithFeedbackList,
  onCreateNewFeedback,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    console.log(stockRecordsWithFeedbackList);
  }, []);

  return (
    <>
      <S.SidebarLayout>
        <S.SidebarContainer isOpen={isOpen}>
          <S.CreateNewChat onClick={onCreateNewFeedback} text="새로운 피드백" />
          <S.ChatItemsContainer>
            {stockRecordsWithFeedbackList &&
              stockRecordsWithFeedbackList.map(
                (stockRecordWithFeedback, index) => (
                  <FeedbackListItem
                    key={index}
                    stockRecordWithFeedback={stockRecordWithFeedback}
                    // onClick={onFeedbackItemClick(stockRecordWithFeedback)}
                    stockRecordsWithFeedback={stockRecordWithFeedback}
                  />
                )
              )}
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

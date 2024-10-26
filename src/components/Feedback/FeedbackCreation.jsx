import React, { useState } from "react";
import * as F from "../../styles/feedback-creation.style";
import { useNavigate } from "react-router-dom";

const FeedbackCreation = () => {
  const navigate = useNavigate();

  const handleFeedbackCreationButton = () => {
    navigate("/record");
  };

  return (
    <F.FeedbackCreationLayout>
      <F.FeedbackCreationLayout>
        <F.FeedbackCreationContainer>
          <F.Heading>새 피드백 받기</F.Heading>
          <div>투자 기록을 관리하고 피드백을 받아보세요</div>
          <F.createFeedbackButton onClick={handleFeedbackCreationButton}>
            이동하기
          </F.createFeedbackButton>
        </F.FeedbackCreationContainer>
      </F.FeedbackCreationLayout>
    </F.FeedbackCreationLayout>
  );
};

export default FeedbackCreation;

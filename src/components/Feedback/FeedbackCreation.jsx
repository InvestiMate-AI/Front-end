import React, { useState } from "react";
import * as F from "../../styles/feedback-creation.style";
import { useNavigate } from "react-router-dom";

const FeedbackCreation = () => {
  const navigate = useNavigate();

  const handleChatCreationButton = () => {
    navigate("/record");
  };

  return (
    <F.ChatCreationLayout>
      <F.ChatCreationLayout>
        <F.ChatCreationContainer>
          <F.Heading>새 피드백 받기</F.Heading>
          <div>투자 기록을 관리하고 피드백을 받아보세요</div>
          <F.createChatButton onClick={handleChatCreationButton}>
            이동하기
          </F.createChatButton>
        </F.ChatCreationContainer>
      </F.ChatCreationLayout>
    </F.ChatCreationLayout>
  );
};

export default FeedbackCreation;

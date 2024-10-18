import React, { useEffect } from "react";
import * as C from "../../styles/feedback-list-item.style";
import { useNavigate } from "react-router-dom";

export default function FeedbackListItem({ feedback }) {
  const navigate = useNavigate();

  const handleFeedbackListItemClick = () => {
    navigate(`/feedback/${feedback.feedbackId}`);
  };

  useEffect(() => {
    console.log(`feedback.feedbackId: ${feedback.feedbackId}`);
  });

  return (
    <>
      <C.ChatItemLayout onClick={handleFeedbackListItemClick}>
        <div className="chat-item-header">
          <div>
            {feedback.feedbackName} {feedback.feedbackDate}
          </div>
          {/* <div>{chat.lastChatDate}</div> */}
        </div>
        <div className="chat-item-content">
          {/* {chat.title} */}
          {/* <C.OptionsButton /> */}
        </div>
      </C.ChatItemLayout>
    </>
  );
}

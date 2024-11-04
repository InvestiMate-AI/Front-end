import React, { useEffect } from "react";
import * as F from "../../styles/feedback-list-item.style";
import { useNavigate } from "react-router-dom";

export default function FeedbackListItem({ stockRecordsWithFeedback }) {
  const navigate = useNavigate();

  const handleFeedbackListItemClick = () => {
    navigate(`/feedback/${stockRecordsWithFeedback.stockRecordId}`);
  };

  useEffect(() => {
    console.log(
      `feedback.feedbackId: ${stockRecordsWithFeedback.stockRecordId}`
    );
  });

  return (
    <>
      <F.ChatItemLayout onClick={handleFeedbackListItemClick}>
        <div className="chat-item-header">
          <div>
            {stockRecordsWithFeedback.name} {stockRecordsWithFeedback.date}
          </div>
          {/* <div>{chat.lastChatDate}</div> */}
        </div>
        <div className="chat-item-content">
          {/* {chat.title} */}
          {/* <C.OptionsButton /> */}
        </div>
      </F.ChatItemLayout>
    </>
  );
}

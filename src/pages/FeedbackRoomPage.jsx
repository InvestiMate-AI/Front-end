import React, { useState, useEffect } from "react";
import * as F from "../styles/feedback-room.style";
import DefaultLayout from "../components/Layout/DefaultLayout";
import { useNavigate } from "react-router-dom";
import FeedbackSidebar from "../components/Feedback/FeedbackSidebar";
import FeedbackReport from "../components/Feedback/FeedbackReport";

function FeedbackRoomPage() {
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [feedbackList, setFeedbackList] = useState([]);

  const navigate = useNavigate();

  const getData = async () => {
    try {
      const response = await fetch("/feedbackList.json");
      console.log(response);
      const jsonData = await response.json();
      setFeedbackList(jsonData.data);
    } catch (error) {
      console.error("Error fetching the data: ", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <DefaultLayout>
      <F.FeedbackRoomLayout>
        <FeedbackSidebar feedbackList={feedbackList}></FeedbackSidebar>
        <F.FeedbackReportListLayout>
          <FeedbackReport></FeedbackReport>
        </F.FeedbackReportListLayout>
      </F.FeedbackRoomLayout>
    </DefaultLayout>
  );
}

export default FeedbackRoomPage;

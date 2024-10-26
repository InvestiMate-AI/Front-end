import React, { useState, useEffect } from "react";
import * as F from "../styles/feedback.style";
import DefaultLayout from "../components/Layout/DefaultLayout";
import { useNavigate } from "react-router-dom";
import FeedbackCreation from "../components/Feedback/FeedbackCreation";
import FeedbackSidebar from "../components/Feedback/FeedbackSidebar";

function FeedbackPage() {
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
      <F.FeedbackLayout>
        <FeedbackSidebar feedbackList={feedbackList}></FeedbackSidebar>
        {!selectedFeedback && <FeedbackCreation />}
      </F.FeedbackLayout>
    </DefaultLayout>
  );
}

export default FeedbackPage;

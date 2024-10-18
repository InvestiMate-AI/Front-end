import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as F from "../styles/feedback.style";
import DefaultLayout from "../components/Layout/DefaultLayout";
import Sidebar from "../components/Chat/ChatSidebar";
import ChatRoom from "../components/Chat/ChatRoom";
import { getThreads } from "../apis/chat";
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
      <F.ChatLayout>
        <FeedbackSidebar feedbackList={feedbackList}></FeedbackSidebar>
        {!selectedFeedback && <FeedbackCreation />}
      </F.ChatLayout>
    </DefaultLayout>
  );
}

export default FeedbackPage;

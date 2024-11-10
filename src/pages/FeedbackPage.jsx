import React, { useState, useEffect } from "react";
import * as F from "../styles/feedback.style";
import DefaultLayout from "../components/Layout/DefaultLayout";
import { useNavigate } from "react-router-dom";
import FeedbackCreation from "../components/Feedback/FeedbackCreation";
import FeedbackSidebar from "../components/Feedback/FeedbackSidebar";
import FeedbackableRecordTable from "../components/Feedback/FeedbackableRecordTable";
import { getStockRecordsWithFeedback } from "../apis/feedback";

function FeedbackPage() {
  const [
    selectedStockRecordsWithFeedbackId,
    setSelectedStockRecordsWithFeedbackId,
  ] = useState(null);
  const [stockRecordsWithFeedbackList, setStockRecordsWithFeedbackList] =
    useState([]);

  const navigate = useNavigate();

  const handleCreateNewFeedback = () => {
    navigate("/feedback");
  };

  const handleFeedbackListItemClick = (stockRecordsWithFeedback) => {
    navigate(`/feedback/${stockRecordsWithFeedback.stockRecordId}`);
  };

  useEffect(() => {
    const fetchStockRecordsWithFeedback = async () => {
      const stockRecordsWithFeedbackList = await getStockRecordsWithFeedback();
      setStockRecordsWithFeedbackList(stockRecordsWithFeedbackList);
    };

    fetchStockRecordsWithFeedback();
  }, []);

  return (
    <DefaultLayout>
      <F.FeedbackLayout>
        <FeedbackSidebar
          stockRecordsWithFeedbackList={stockRecordsWithFeedbackList}
          onCreateNewFeedback={handleCreateNewFeedback}
          onFeedbackItemClick={handleFeedbackListItemClick}
        ></FeedbackSidebar>
        <F.FeedbackCreationLayout>
          <FeedbackableRecordTable />
        </F.FeedbackCreationLayout>
      </F.FeedbackLayout>
    </DefaultLayout>
  );
}

export default FeedbackPage;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as F from "../styles/feedback-room.style";
import DefaultLayout from "../components/Layout/DefaultLayout";
import { useNavigate } from "react-router-dom";
import FeedbackSidebar from "../components/Feedback/FeedbackSidebar";
import FeedbackReportList from "../components/Feedback/FeedbackReportList";
import { getStockRecordsWithFeedback } from "../apis/feedback";

function FeedbackRoomPage() {
  const { feedbackId } = useParams();
  const [stockRecordsWithFeedbackList, setStockRecordsWithFeedbackList] =
    useState([]);
  const [selectedStockRecord, setSelectedStockRecord] = useState(null);

  const navigate = useNavigate();

  const handleCreateNewFeedback = () => {
    navigate("/feedback");
  };

  const handleFeedbackListItemClick = (stockRecordsWithFeedback) => {
    navigate(`/feedback/${stockRecordsWithFeedback.stockRecordId}`);
  };

  const fetchStockRecordsWithFeedback = async () => {
    const stockRecordsWithFeedbackList = await getStockRecordsWithFeedback();
    setStockRecordsWithFeedbackList(stockRecordsWithFeedbackList);

    const selected = stockRecordsWithFeedbackList.find(
      (stockRecordWithFeedback) => {
        if (stockRecordWithFeedback.stockRecordId == feedbackId) {
          return stockRecordWithFeedback;
        } else {
          return null;
        }
      }
    );
    setSelectedStockRecord(selected);
  };

  useEffect(() => {
    fetchStockRecordsWithFeedback();
  }, []);

  return (
    <DefaultLayout>
      <F.FeedbackRoomLayout>
        <FeedbackSidebar
          stockRecordsWithFeedbackList={stockRecordsWithFeedbackList}
          setSelectedFeedback={setSelectedStockRecord}
          onCreateNewFeedback={handleCreateNewFeedback}
          onFeedbackItemClick={handleFeedbackListItemClick}
        ></FeedbackSidebar>
        <F.FeedbackReportListLayout>
          <FeedbackReportList feedbackId={Number(feedbackId)} />
        </F.FeedbackReportListLayout>
      </F.FeedbackRoomLayout>
    </DefaultLayout>
  );
}

export default FeedbackRoomPage;

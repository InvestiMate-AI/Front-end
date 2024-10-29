import React, { useState, useEffect } from "react";
import DefaultLayout from "../components/Layout/DefaultLayout";
import RecordFilter from "../components/Record/RecordFilter";
import RecordTable from "../components/Record/RecordTable";
import RecordSidebar from "../components/Record/RecordSidebar";
import RecordCreation from "../components/Record/RecordCreation";
import * as R from "../styles/record.style";

function RecordPage() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch("/recordData.json");
      const jsonData = await response.json();
      setData(jsonData["data"]);
    } catch (error) {
      console.error("Error fetching the data: ", error);
    }
  };

  const createFeedback = () => {};

  const handleClickCreateFeedbackButton = () => {};

  useEffect(() => {
    // getData();
  }, []);

  return (
    <DefaultLayout>
      <R.RecordPageLayout>
        <RecordSidebar></RecordSidebar>
        <R.RecordContainer>
          <RecordCreation></RecordCreation>
          <RecordTable />
        </R.RecordContainer>
      </R.RecordPageLayout>
      <button onClick={handleClickCreateFeedbackButton}>피드백 생성</button>
    </DefaultLayout>
  );
}

export default RecordPage;

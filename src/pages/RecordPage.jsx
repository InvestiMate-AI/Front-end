import React, { useState, useEffect } from "react";
import DefaultLayout from "../components/Layout/DefaultLayout";
import RecordTable from "../components/Record/RecordTable";
import RecordSidebar from "../components/Record/RecordSidebar";
import RecordCreation from "../components/Record/RecordCreation";
import * as R from "../styles/record.style";

function RecordPage() {
  const handleClickCreateFeedbackButton = () => {};

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

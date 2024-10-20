import React, { useState, useEffect } from "react";
import DefaultLayout from "../components/Layout/DefaultLayout";
import RecordFilter from "../components/Record/RecordFilter";
import RecordTable from "../components/Record/RecordTable";
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

  useEffect(() => {
    getData();
  }, []);

  return (
    <DefaultLayout>
      <R.RecordLayout>
        <RecordFilter />
        <RecordTable />
      </R.RecordLayout>
    </DefaultLayout>
  );
}

export default RecordPage;

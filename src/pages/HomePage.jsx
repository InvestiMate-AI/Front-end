import React, { useState, useEffect } from "react";
import * as H from "../styles/home.style";
import DefaultLayout from "../components/Layout/DefaultLayout";
import { getRecords } from "../apis/record";

function HomePage() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      const recordsData = await getRecords();
      setRecords(recordsData);
    };

    fetchRecords();
  }, []);
  return (
    <>
      <DefaultLayout>
        <H.Section1>
          <h1>INVESTIMATE</h1>
          <p>{records}</p>
        </H.Section1>
      </DefaultLayout>
    </>
  );
}

export default HomePage;

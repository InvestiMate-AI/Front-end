import React, { useState, useEffect } from "react";
import * as H from "../styles/home.style";
import DefaultLayout from "../components/Layout/DefaultLayout";
import { createRecords, getRecords, deleteRecord } from "../apis/record";

function HomePage() {
  const [records, setRecords] = useState([]);
  const [recordId, setRecordId] = useState(0);

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
          {records.length > 0 ? (
            <ul>
              {records.map((record) => (
                <li key={record.stockRecordId}>
                  <p>Date: {new Date(record.date).toLocaleDateString()}</p>
                  <p>Name: {record.name}</p>
                  <p>Volume: {record.volume}</p>
                  <p>Type: {record.type}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No records available</p>
          )}
          <button
            onClick={(event) =>
              createRecords({
                date: "1729227600000",
                name: "회사1",
                volume: 999,
                type: "Buy",
              })
            }
          >
            생성
          </button>
          {records.length > 0 && (
            <button onClick={(event) => deleteRecord(records[0].stockRecordId)}>
              삭제
            </button>
          )}
        </H.Section1>
      </DefaultLayout>
    </>
  );
}

export default HomePage;

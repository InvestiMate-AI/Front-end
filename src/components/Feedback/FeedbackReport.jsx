import React, { useEffect, useState } from "react";
import Chart from "./Chart";

export default function FeedbackReport() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch("/data.json");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching the data: ", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // 타임스탬프를 날짜 형식으로 변환하는 함수
  const convertTimestampToDate = (timestamp) => {
    const date = new Date(parseInt(timestamp));
    return date.toISOString().split("T")[0]; // 'YYYY-MM-DD' 형식으로 변환
  };

  const renderTable = (tableData) => {
    const parsedData = JSON.parse(tableData);
    const timestamps = Object.keys(parsedData.Open);

    return (
      <table
        border="1"
        cellPadding="5"
        cellSpacing="0"
        style={{ tableLayout: "fixed", width: "100%" }}
      >
        <thead>
          <tr>
            <th>Date</th>
            <th>Open</th>
            <th>High</th>
            <th>Low</th>
            <th>Close</th>
            <th>Volume</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          {timestamps.map((timestamp) => (
            <tr key={timestamp}>
              <td>{convertTimestampToDate(timestamp)}</td>
              <td>{parsedData.Open[timestamp]}</td>
              <td>{parsedData.High[timestamp]}</td>
              <td>{parsedData.Low[timestamp]}</td>
              <td>{parsedData.Close[timestamp]}</td>
              <td>{parsedData.Volume[timestamp]}</td>
              <td>{parsedData.Change[timestamp]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const renderChart = (charData) => {
    const data = JSON.parse(charData);

    if (!data || !data.Close || !data.Volume) {
      console.log(typeof data);
      console.error("Invalid data for rendering chart");
      return <div>No chart data available</div>;
    }
    // JSON 데이터를 처리
    const labels = Object.keys(data.Close).map(convertTimestampToDate);
    const priceValues = Object.values(data.Close);
    const volumeValues = Object.values(data.Volume);

    return (
      <>
        <Chart
          labels={labels}
          priceValues={priceValues}
          volumeValues={volumeValues}
        />
      </>
    );
  };

  const renderContent = (item) => {
    switch (item.type) {
      case "table":
        return (
          <div
            key={item.index}
            style={{
              width: "1400px",
              height: "700px",
              border: "2px solid rgba(211, 220, 50, .6)",
              wordBreak: "keep-all",
              whiteSpace: "normal",
              overflow: "auto",
            }}
          >
            {renderTable(item.data)} {/* 테이블 렌더링 */}
          </div>
        );

      case "chart":
        return (
          <div
            key={item.index}
            style={{
              width: "1400px",
              border: "2px solid rgba(211, 220, 50, .6)",
              wordBreak: "keep-all",
              whiteSpace: "normal",
            }}
          >
            {renderChart(item.data)}
          </div>
        );

      case "text":
        return (
          <div
            key={item.index}
            style={{
              width: "1400px",
              border: "2px solid rgba(211, 220, 50, .6)",
              wordBreak: "keep-all",
              whiteSpace: "normal",
            }}
          >
            <p>
              {item.data.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      {data.length > 0 ? (
        data.map((item) => renderContent(item))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

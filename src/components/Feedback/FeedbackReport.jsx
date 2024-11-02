import React, { useEffect, useState } from "react";
import Chart from "./Chart";
import * as F from "../../styles/feedback-report.style";

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
      <div>
        <Chart
          labels={labels}
          priceValues={priceValues}
          volumeValues={volumeValues}
        />
      </div>
    );
  };

  const renderContent = (item) => {
    switch (item.type) {
      case "table":
        return (
          <F.FeedbackReportItemLayout key={item.index}>
            <h3>테이블</h3>
            {renderTable(item.data)} {/* 테이블 렌더링 */}
          </F.FeedbackReportItemLayout>
        );

      case "chart":
        return (
          <F.FeedbackReportChartLayout key={item.index}>
            <h3>차트</h3>
            {renderChart(item.data)}
          </F.FeedbackReportChartLayout>
        );

      case "text":
        return (
          <F.FeedbackReportItemLayout
            key={item.index}
            style={{
              wordBreak: "keep-all",
              whiteSpace: "normal",
            }}
          >
            <h3>텍스트</h3>
            <p>
              {item.data
                .trim()
                .split("\n")
                .map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
            </p>
          </F.FeedbackReportItemLayout>
        );
      default:
        return null;
    }
  };

  return (
    <F.FeedbackReportListContainer>
      {data.length > 0 ? (
        data.map((item) => renderContent(item))
      ) : (
        <p>Loading...</p>
      )}
    </F.FeedbackReportListContainer>
  );
}

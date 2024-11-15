import React, { useEffect, useState } from "react";
import ChartAssets from "./Charts/ChartAssets";
import ChartReturns from "./Charts/ChartReturns";
import ChartShares from "./Charts/ChartShares";
import ChartSignals from "./Charts/ChartSignals";
import * as F from "../../styles/feedback-report.style";
import Spinner from "../../styles/spinner.style";

export default function SimulationReportList({ simulationReports }) {
  const [reportData, setReportData] = useState([]);

  useEffect(() => {
    setReportData(simulationReports ? simulationReports : []);
  }, [simulationReports]);

  // 타임스탬프를 날짜 형식으로 변환하는 함수
  const convertTimestampToDate = (timestamp) => {
    const date = new Date(parseInt(timestamp));
    return date.toISOString().split("T")[0]; // 'YYYY-MM-DD' 형식으로 변환
  };

  const renderChartAssets = (charData) => {
    const data = JSON.parse(charData);

    if (!data || !data.total_value || !data.cash) {
      console.error("Invalid data for rendering chart");
      return <div>No chart data available</div>;
    }
    // JSON 데이터를 처리
    const labels = Object.keys(data.total_value).map(convertTimestampToDate);
    const totalValueValues = Object.values(data.total_value);
    const cashValues = Object.values(data.cash);

    return (
      <ChartAssets
        labels={labels}
        totalValueValues={totalValueValues}
        cashValues={cashValues}
      />
    );
  };

  const renderChartReturns = (charData) => {
    const data = JSON.parse(charData);

    if (!data || !data.returns || !data.holding_returns) {
      console.error("Invalid data for rendering chart");
      return <div>No chart data available</div>;
    }
    // JSON 데이터를 처리
    const labels = Object.keys(data.returns).map(convertTimestampToDate);
    const returnValues = Object.values(data.returns);
    const holdingReturnValues = Object.values(data.holding_returns);

    return (
      <ChartReturns
        labels={labels}
        returnValues={returnValues}
        holdingReturnValues={holdingReturnValues}
      />
    );
  };

  const renderChartShares = (charData) => {
    const data = JSON.parse(charData);

    if (!data || !data.shares) {
      console.error("Invalid data for rendering chart");
      return <div>No chart data available</div>;
    }
    // JSON 데이터를 처리
    const labels = Object.keys(data.shares).map(convertTimestampToDate);
    const shareValues = Object.values(data.shares);

    return <ChartShares labels={labels} shareValues={shareValues} />;
  };

  const renderChartSignals = (charData) => {
    const data = JSON.parse(charData);

    if (!data || !data.Close) {
      console.error("Invalid data for rendering chart");
      return <div>No chart data available</div>;
    }

    // JSON 데이터를 처리하여 null 값을 Close 값으로 대체
    const replaceNullWithClose = (patternData) => {
      return Object.keys(patternData).map((key) =>
        patternData[key] === null ? data.Close[key] : patternData[key]
      );
    };

    const labels = Object.keys(data.Close).map(convertTimestampToDate);
    const priceValues = Object.values(data.Close);

    // 패턴 데이터를 유동적으로 필터링하여 처리
    const patterns = {};
    Object.keys(data).forEach((key) => {
      if (key.startsWith("buy_pattern") || key.startsWith("sell_pattern")) {
        patterns[key] = replaceNullWithClose(data[key]);
      }
    });

    return (
      <ChartSignals
        labels={labels}
        priceValues={priceValues}
        patterns={patterns} // 유동적인 패턴 데이터 전달
      />
    );
  };

  const renderContent = (item) => {
    switch (item.type) {
      case "chart_shares":
        return (
          <F.FeedbackReportChartLayout key={item.index}>
            <h3>chart_shares</h3>
            {renderChartShares(item.data)}
          </F.FeedbackReportChartLayout>
        );
      case "chart_asset":
        return (
          <F.FeedbackReportChartLayout key={item.index}>
            <h3>chart_asset</h3>
            {renderChartAssets(item.data)}
          </F.FeedbackReportChartLayout>
        );
      case "chart_returns":
        return (
          <F.FeedbackReportChartLayout key={item.index}>
            <h3>chart_returns</h3>
            {renderChartReturns(item.data)}
          </F.FeedbackReportChartLayout>
        );
      case "chart_signals":
        return (
          <F.FeedbackReportChartLayout key={item.index}>
            <h3>chart_signals</h3>
            {renderChartSignals(item.data)}
          </F.FeedbackReportChartLayout>
        );
      default:
        return null;
    }
  };

  return (
    <F.FeedbackReportListContainer>
      {reportData.length > 0 ? (
        reportData.map((item) => renderContent(item))
      ) : (
        <></>
      )}
    </F.FeedbackReportListContainer>
  );
}

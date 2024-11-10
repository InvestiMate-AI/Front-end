import React, { useState, useEffect } from "react";
import DefaultLayout from "../components/Layout/DefaultLayout";
import SimulationSidebar from "../components/Simulation/SimulationSidebar";
import SimulationCreation from "../components/Simulation/SimulationCreation";
import SimulationReportList from "../components/Simulation/SimulationReportList";
import * as S from "../styles/simulation.style";
import { fetchSimulationResult } from "../apis/simulation";

function SimulationTest() {
  const [jsonData, setJsonData] = useState({
    corp: "삼성전자",
    totalAsset: 100000000,
    splitRate: 0.1,
    startDate: "2023-10-14",
    endDate: "2024-03-18",
    buyOption: [
      [
        "sma_golden_cross_50_200",
        "sma_dead_cross_50_200",
        "sma_golden_cross_recent_50_200",
      ],
      ["sma_golden_cross_50_200", "sma_dead_cross_50_200"],
      [
        "sma_golden_cross_50_200",
        "sma_dead_cross_50_200",
        "sma_golden_cross_recent_50_200",
      ],
      ["sma_golden_cross_50_200"],
    ],
    sellOption: [
      ["sto_trend_reversal_recent", "pvt_divergence_recent"],
      [
        "sto_buy_golden_cross_recent",
        "pvt_divergence",
        "pvt_divergence_recent",
      ],
    ],
  });
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await fetchSimulationResult(jsonData);
    setResponseMessage(JSON.stringify(data, null, 2)); // 응답 데이터를 문자열로 변환하여 상태에 저장
  };

  const handleInputChange = (e) => {
    try {
      setJsonData(JSON.parse(e.target.value));
    } catch (error) {
      console.error("Invalid JSON input");
    }
  };

  return (
    <div>
      <h2>JSON Data Submission</h2>
      <textarea
        rows="10"
        cols="50"
        defaultValue={JSON.stringify(jsonData, null, 2)}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Submit JSON</button>
      <h3>Response:</h3>
      <pre>{responseMessage}</pre> {/* 응답 메시지를 문자열로 출력 */}
    </div>
  );
}

export default SimulationTest;

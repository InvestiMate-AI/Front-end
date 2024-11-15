import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement, // BarElement 추가
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import Spinner from "../../../styles/spinner.style";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement, // BarElement 추가
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function ChartAssets({ labels, totalValueValues, cashValues }) {
  const [chartData, setChartData] = useState(null);
  const [totalValues, setTotalValues] = useState([]);
  const [cashes, setCashes] = useState([]);

  useEffect(() => {
    setChartData({
      labels: labels,
      datasets: [
        {
          label: "Total Value",
          data: totalValueValues,
          borderColor: "rgb(57, 139, 255)",
          backgroundColor: "rgba(140, 183, 245, 0.5)",
          fill: "origin", // 'origin'으로 채움 설정
          tension: 0.2, // 라인 부드럽게
          pointBackgroundColor: "rgba(57, 139, 255, 1)", // 포인트 색상
          yAxisID: "y1", // 첫 번째 Y축 사용
        },
        {
          label: "Cash",
          data: cashValues,
          backgroundColor: "rgba(75, 192, 192, 0.5)",
          borderColor: "rgba(75, 192, 192, 1)",
          type: "bar", // 거래량은 막대그래프 형태
          yAxisID: "y2", // 두 번째 Y축 사용 (거래량)
        },
      ],
    });

    // 상태로 저장하여 툴팁에서 사용 가능하도록 함
    setTotalValues(totalValueValues);
    setCashes(cashValues);
  }, []);

  if (!chartData) {
    return <></>;
  }

  // 옵션 설정
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const index = tooltipItem.dataIndex;
            return [
              `Date: ${labels[index]}`,
              `Total Value: ${totalValueValues[index].toLocaleString()}`,
              `Cash: ${cashValues[index].toLocaleString()}`,
            ];
          },
        },
      },
    },
    // onClick: handlePointClick, // 차트 포인트 클릭 시 이벤트 핸들러
    scales: {
      y1: {
        position: "right", // 첫 번째 Y축은 가격
        beginAtZero: false,
        title: {
          display: true,
          text: "Total Value",
        },
        ticks: {
          align: "right",
        },
        grid: {
          drawOnChartArea: false,
        },
      },
      y2: {
        position: "left", // 두 번째 Y축은 거래량
        beginAtZero: true,
        title: {
          display: true,
          text: "Cash",
        },
        grid: {
          drawOnChartArea: false,
        },
      },
      x: {
        title: {
          display: true,
          text: "날짜",
        },
        ticks: {
          maxTicksLimit: 8, // 적절한 간격으로 날짜 라벨 표시
        },
      },
    },
  };

  return (
    <Line
      options={options}
      data={{
        ...chartData,
      }}
    />
  );
}

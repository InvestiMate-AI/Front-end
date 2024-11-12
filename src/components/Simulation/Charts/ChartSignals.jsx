import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function ChartSignals({ labels, priceValues, patterns }) {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // 기본 차트 데이터 세팅
    const datasets = [
      {
        label: "Price",
        data: priceValues,
        borderColor: "rgb(57, 139, 255)",
        backgroundColor: "rgba(140, 183, 245, 0.5)",
        fill: "origin",
        tension: 0.2,
        pointBackgroundColor: "rgba(57, 139, 255, 1)",
        yAxisID: "y1",
      },
    ];

    // 유동적인 패턴 데이터 추가
    Object.keys(patterns).forEach((patternKey) => {
      const patternData = patterns[patternKey];
      const isBuyPattern = patternKey.includes("buy");

      datasets.push({
        label: patternKey.replace(/_/g, " "),
        data: Object.values(patternData),
        radius: 10,
        pointStyle: isBuyPattern ? "triangle" : "rect",
        pointBorderColor: isBuyPattern ? "red" : "blue",
        pointBackgroundColor: isBuyPattern ? "red" : "blue",
        showLine: false,
        yAxisID: "y1",
      });
    });

    setChartData({
      labels: labels,
      datasets: datasets,
    });
  }, [labels, priceValues, patterns]);

  if (!chartData) {
    return <div>Loading...</div>;
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          usePointStyle: true,
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const index = tooltipItem.dataIndex;
            return [
              `Date: ${labels[index]}`,
              `Price: ${priceValues[index].toLocaleString()}`,
            ];
          },
        },
      },
    },
    scales: {
      y1: {
        position: "right",
        beginAtZero: false,
        title: {
          display: true,
          text: "Price",
        },
      },
      x: {
        title: {
          display: true,
          text: "날짜",
        },
        ticks: {
          maxTicksLimit: 8,
        },
      },
    },
  };

  return <Line options={options} data={chartData} />;
}

import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
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
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function ChartSignals({
  labels,
  priceValues,
  buyPattern0Values,
  buyPattern1Values,
  buyPattern2Values,
  sellPattern0Values,
  sellPattern1Values,
}) {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    setChartData({
      labels: labels,
      datasets: [
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
        {
          label: "Buy Pattern 0",
          radius: 10,
          data: buyPattern0Values,
          pointStyle: "triangle",
          pointBorderColor: "red",
          pointBackgroundColor: "red",
          showLine: false,
          yAxisID: "y1",
        },
        {
          label: "Buy Pattern 1",
          radius: 10,
          data: buyPattern1Values,
          pointStyle: "triangle",
          pointBorderColor: "red",
          pointBackgroundColor: "red",
          showLine: false,
          yAxisID: "y1",
        },
        {
          label: "Buy Pattern 2",
          radius: 10,
          data: buyPattern2Values,
          pointStyle: "triangle",
          pointBorderColor: "red",
          pointBackgroundColor: "red",
          showLine: false,
          yAxisID: "y1",
        },
        {
          label: "Sell Pattern 0",
          radius: 10,
          data: sellPattern0Values,
          pointStyle: "rect",
          pointBorderColor: "blue",
          pointBackgroundColor: "blue",
          showLine: false,
          yAxisID: "y1",
        },
        {
          label: "Sell Pattern 1",
          radius: 10,
          data: sellPattern1Values,
          pointStyle: "rect",
          pointBorderColor: "blue",
          pointBackgroundColor: "blue",
          showLine: false,
          yAxisID: "y1",
        },
      ],
    });
  }, [
    labels,
    priceValues,
    buyPattern0Values,
    buyPattern1Values,
    buyPattern2Values,
    sellPattern0Values,
    sellPattern1Values,
  ]);

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

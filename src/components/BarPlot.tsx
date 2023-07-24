import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Demo bar plot",
      backgroundColor: "#20b2aa",
      borderColor: "transparent",
      hoverBackgroundColor: "#5f9ea0",
      data: [50, 30, 70, 15, 50, 0, 100],
    },
  ],
};

export const options = {
  indexAxis: 'y' as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Horizontal Bar Chart',
    },
  },
};

const BarPlot: React.FC = () => {
  return (
    <div>
      <Bar data={data} />
      <Bar options={options} data={data} />
    </div>
  );
};

export default BarPlot;
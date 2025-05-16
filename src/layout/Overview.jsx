import React from "react";
import {Bar } from 'react-chartjs-2';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';



import {
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
} from "chart.js";

// Register required Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

// Sample data
const data = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Sales",
      data: [65, 59, 80, 81, 56],
      backgroundColor: [
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
        "rgba(75, 192, 192, 0.6)",
        "rgba(153, 102, 255, 0.6)",
      ],
    },
  ],
};

const options = {
  plugins: {
    legend: { display: true, position: "top" },
  },
  scales: {
    y: { beginAtZero: true },
  },
};

//donut
ChartJS.register(ArcElement, Tooltip, Legend);

export const dondata = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};


const Overview = () => {
  return (
    <div >
      <h1 className="mt-5 ms-10">Welcome, Admin name</h1>

      <div className="flex justify-center gap-20 text-center mt-7">
        <div className="bg-slate-100 rounded-lg shadow-md p-1 h-28 w-32">
          <p>This month</p><br />
          <h1 className="text-2xl font-bold">3k</h1>
        </div>
        <div className="bg-slate-100 rounded-lg shadow-md p-1 h-28 w-32">
          <p>Verified cases</p><br />
          <h1 className="text-2xl font-bold">2.5k</h1>
        </div>
        <div className="bg-slate-100 rounded-lg shadow-md p-1 h-28 w-32">
          <p>Pending</p><br />
          <h1 className="text-2xl font-bold">200</h1>
        </div>
        <div className="bg-slate-100 rounded-lg shadow-md p-1 h-28 w-32">
          <p>Rejected</p><br />
          <h1 className="text-2xl font-bold">300</h1>
        </div>

      </div>

      <div className="flex justify-between gap-24 mt-16 ms-10">
        <div className="h-[400px] w-[400px] bg-slate-100 rounded-lg shadow-lg p-5">
        <h2>Sales Data</h2>
        <Bar data={data} options={options} />
        </div>
      

        <div className="h-[400px] w-[400px] bg-slate-100 rounded-lg shadow-lg p-5">
        <Doughnut data={dondata} />
        </div>
      </div>
  </div>
  )
}

export default Overview
import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Line, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const SalesReport = () => {
  const [monthFilter, setMonthFilter] = useState("All");

  // Sample data
  const monthlySalesData = {
    labels: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ],
    datasets: [
      {
        label: "Sales ($)",
        data: Array.from({ length: 12 }, () => (Math.random() * 5000).toFixed(2)),
        borderColor: "#4f46e5",
        backgroundColor: "#818cf8",
        tension: 0.4,
      },
    ],
  };

  const topItemsData = {
    labels: ["Coffee", "Bagel", "Latte", "Sandwich", "Espresso"],
    datasets: [
      {
        label: "Top Selling Items",
        data: [25, 15, 20, 10, 30],
        backgroundColor: [
          "#4f46e5",
          "#6366f1",
          "#a5b4fc",
          "#818cf8",
          "#c7d2fe",
        ],
        borderWidth: 1,
      },
    ],
  };

  const summary = {
    totalOrders: 120,
    totalRevenue: 7560.25,
    totalProducts: 85,
  };

  return (
    <div className="p-6 bg-primary2 rounded-xl shadow-md space-y-6">
      {/* Summary Cards */}
      <div className="flex flex-wrap gap-4">
        <div className="flex-1 bg-white p-4 rounded-lg shadow flex flex-col items-center">
          <h2 className="text-gray-500 font-semibold">Total Orders</h2>
          <p className="text-2xl font-bold text-purple-700">{summary.totalOrders}</p>
        </div>
        <div className="flex-1 bg-white p-4 rounded-lg shadow flex flex-col items-center">
          <h2 className="text-gray-500 font-semibold">Total Revenue</h2>
          <p className="text-2xl font-bold text-green-600">${summary.totalRevenue}</p>
        </div>
        <div className="flex-1 bg-white p-4 rounded-lg shadow flex flex-col items-center">
          <h2 className="text-gray-500 font-semibold">Total Products Sold</h2>
          <p className="text-2xl font-bold text-blue-600">{summary.totalProducts}</p>
        </div>
      </div>

      {/* Filter */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">Sales Report</h2>
        <select
          className="border rounded px-3 py-1"
          value={monthFilter}
          onChange={(e) => setMonthFilter(e.target.value)}
        >
          <option className="text-black">All</option>
          {monthlySalesData.labels.map((month) => (
            <option key={month} className="text-black">{month}</option>
          ))}
        </select>
      </div>

      {/* Charts */}
      <div className="flex flex-wrap gap-6">
        <div className="flex-1 bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold text-white mb-2">Monthly Sales</h3>
          <Line data={monthlySalesData} />
        </div>

        <div className="flex-1 bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold text-gray-700 mb-2">Top Selling Items</h3>
          <Pie data={topItemsData} />
        </div>
      </div>
    </div>
  );
};

export default SalesReport;

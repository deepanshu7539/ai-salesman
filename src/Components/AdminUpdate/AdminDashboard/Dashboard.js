import React, { useState } from "react";

import TableContent from "./TableContent";
import LineGraph from "./LineGraph";
import BarGraph from "./BarGraph";
import PieChartGraph from "./PieChartGraph";

const initialData = [
  { day: "Mon", users: 100 },
  { day: "Tue", users: 200 },
  { day: "Wed", users: 150 },
  { day: "Thu", users: 300 },
  { day: "Fri", users: 250 },
  { day: "Sat", users: 400 },
  { day: "Sun", users: 350 },
];

const revenueData = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 3000 },
  { month: "Mar", revenue: 6000 },
  { month: "Apr", revenue: 4500 },
  { month: "May", revenue: 7000 },
  { month: "Jun", revenue: 8000 },
  { month: "Jul", revenue: 8000 },
  { month: "Aug", revenue: 10000 },
  { month: "Sept", revenue: 8000 },
  { month: "Oct", revenue: 7000 },
  { month: "Nov", revenue: 8000 },
  { month: "Dec", revenue: 9000 },
];

const conversionRateData = [
  { stage: "Visits", rate: 80 },
  { stage: "Quotes", rate: 60 },
  { stage: "Bookings", rate: 40 },
  { stage: "Purchases", rate: 20 },
];

const UserGraph = ( {setStep}) => {
  const [data, setData] = useState(initialData);
  const [filter, setFilter] = useState("all");
  const [view, setView] = useState("dashboard");

  const filterData = (days) => {
    const today = new Date().getDay();
    const filteredData = initialData.slice(today - days + 1, today + 1);
    setData(filteredData);
    setFilter(days.toString());
  };

  return (
    <div className="container mx-auto p-5 bg-white rounded-xl shadow-lg h-[90vh] overflow-y-auto overflow-hidden pr-10">
      <div className="flex justify-between items-center mb-4 border-b-2 border-gray-300">
        <h2 className="text-2xl text-black font-serif text-center font-bold mb-3">
          Dashboard
        </h2>
        <div className="flex space-x-4">
          <button
            className={`py-2 px-4 rounded-t-lg ${
              view === "dashboard"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setView("dashboard")}
          >
            Statistics
          </button>
          <button
            className={`py-2 px-4 rounded-t-lg ${
              view === "table"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setView("table")}
          >
            Call Records
          </button>
        </div>
      </div>

      {view === "dashboard" ? (
        <>
          <div className="flex justify-center space-x-4 mb-4 text-sm">
            <button
              className={`btn ${filter === "all" ? "btn-active" : ""}`}
              onClick={() => setData(initialData) & setFilter("all")}
            >
              All
            </button>
            <button
              className={`btn ${filter === "1" ? "btn-active" : ""}`}
              onClick={() => filterData(1)}
            >
              Today
            </button>
            <button
              className={`btn ${filter === "15" ? "btn-active" : ""}`}
              onClick={() => filterData(15)}
            >
              Last 15 Days
            </button>
            <button
              className={`btn ${filter === "30" ? "btn-active" : ""}`}
              onClick={() => filterData(30)}
            >
              Last 30 Days
            </button>
          </div>

          <LineGraph data={data} />
          <BarGraph revenueData={revenueData} />
          <PieChartGraph conversionRateData={conversionRateData} />
        </>
      ) : (
        <TableContent setStep={setStep} />
      )}
    </div>
  );
};

export default UserGraph;

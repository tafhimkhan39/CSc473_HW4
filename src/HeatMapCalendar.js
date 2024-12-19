import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { Tooltip } from "react-tooltip";

const HeatmapCalendar = ({ purchaseData }) => {
  const today = new Date();

  const getClassForValue = (value) => {
    if (!value) return "color-empty"; 
    const amount = value.count;
    if (amount > 200) {
      return "color-twohundred"; 
    } else if (amount > 100) {
      return "color-hundred"; 
    } else if (amount > 0) {
      return "color-fifty"; 
    } else if (amount < -500) {
      return "color-overfivehundred"; 
    } else if (amount < -100) {
      return "color-overhundred"; 
    } else if (amount < 0) {
      return "color-zero"; 
    }
    return "color-empty"; 
  };

  const groupedDataByMonth = purchaseData.reduce((acc, item) => {
    const month = new Date(item.date).toLocaleString("default", { month: "long", year: "numeric" });
    if (!acc[month]) {
      acc[month] = [];
    }
    acc[month].push(item);
    return acc;
  }, {});

  const months = [
    "January 2024", "February 2024", "March 2024", "April 2024", "May 2024", 
    "June 2024", "July 2024", "August 2024", "September 2024", "October 2024", 
    "November 2024", "December 2024"
  ];

  months.forEach(month => {
    if (!groupedDataByMonth[month]) {
      groupedDataByMonth[month] = []; 
    }
  });

  return (
    <div>
      <div className="heatmap">
        {Object.entries(groupedDataByMonth).map(([month, data]) => {
          const monthStart = new Date(month); 
          const monthEnd = new Date(monthStart.getFullYear(), monthStart.getMonth() + 1, 0); 

          return (
            <div key={month} className="month-box">
              <h2>{month}</h2>
              <CalendarHeatmap
                startDate={monthStart}
                endDate={monthEnd} 
                values={data.map((item) => ({
                  date: item.date,
                  count: item.amount,
                  description: item.description,
                }))}
                classForValue={(value) => getClassForValue(value)}
                tooltipDataAttrs={(value) => ({
                  "data-tooltip-id": "spending-tooltip",
                  "data-tooltip-content": value
                    ? `Date: ${value.date} | Amount: $${value.count} | Description: ${value.description}`
                    : null,
                })}
              />
            </div>
          );
        })}
      </div>

      <Tooltip id="spending-tooltip" />
    </div>
  );
};

export default HeatmapCalendar;
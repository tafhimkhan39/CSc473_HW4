import React, { useState, useEffect } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import { Tooltip } from "react-tooltip";

const HeatmapCalendar = () => {
  const [purchaseData, setPurchaseData] = useState([]);

  useEffect(() => {
    // Simulate loading purchase data
    const data = [
      { date: "2024-11-01", amount: 50.5, mostExpensiveItem: "Coffee" },
      { date: "2024-11-03", amount: 20.75, mostExpensiveItem: "Groceries" },
      { date: "2024-11-04", amount: 100.0, mostExpensiveItem: "Electronics" },
      { date: "2024-11-05", amount: 10.25, mostExpensiveItem: "Cafe" },
      { date: "2024-11-07", amount: 75.0, mostExpensiveItem: "Tech Store" },
    ];
    setPurchaseData(data);
  }, []);

  const today = new Date();

  return (
    <div>
      <h2>Daily Spending Patterns</h2>
      <CalendarHeatmap
        startDate={new Date("2024-11-01")}
        endDate={today}
        values={purchaseData.map((item) => ({
          date: item.date,
          count: item.amount,
          mostExpensiveItem: item.mostExpensiveItem,
        }))}
        classForValue={(value) => {
          if (!value) return "color-empty";
          const amount = value.count;
          if (amount > 100) return "color-high";
          if (amount > 40) return "color-medium";
          return "color-low";
        }}
        tooltipDataAttrs={(value) => {
          if (!value) {
            return {
              "data-tooltip-id": "spending-tooltip",
              "data-tooltip-content": "No data",
            };
          }
          return {
            "data-tooltip-id": "spending-tooltip",
            "data-tooltip-content": `Date: ${value.date} | Amount: $${value.count.toFixed(
              2
            )} | Most Expensive: ${value.mostExpensiveItem}`,
          };
        }}
      />
      <Tooltip id="spending-tooltip" />
    </div>
  );
};

export default HeatmapCalendar;




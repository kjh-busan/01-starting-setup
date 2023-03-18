import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { id: "id1", label: "Jan", value: 0 },
    { id: "id2", label: "Feb", value: 0 },
    { id: "id3", label: "Mar", value: 0 },
    { id: "id4", label: "Apr", value: 0 },
    { id: "id5", label: "May", value: 0 },
    { id: "id6", label: "Jun", value: 0 },
    { id: "id7", label: "Jul", value: 0 },
    { id: "id8", label: "Aug", value: 0 },
    { id: "id9", label: "Sep", value: 0 },
    { id: "id10", label: "Oct", value: 0 },
    { id: "id11", label: "Nov", value: 0 },
    { id: "id12", label: "Dec", value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;

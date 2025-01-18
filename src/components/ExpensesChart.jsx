import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

function ExpensesChart({ expensedata }) {
  const categoryExpenses = expensedata.reduce((acc, curr) => {
    const category = curr.category;
    const amount = curr.amount;
    if (acc[category]) {
      acc[category] += amount;
    } else {
      acc[category] = amount;
    }
    return acc;
  }, {});

  const labels = Object.keys(categoryExpenses);
  const data = Object.values(categoryExpenses);

  const chartData = {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 205, 86, 0.6)',
          'rgba(54, 162, 235, 0.6)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h3>Expenses Chart</h3>
      <Pie data={chartData} />
    </div>
  );
}

export default ExpensesChart;

import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

function ExpensesGraph({ expensedata }) {
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

  const graphData = {
    labels: labels,
    datasets: [
      {
        label: 'Expense Amount',
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
    <div className='graph-inner-div' style={{ width: "100%", height: "100%" }}>
      <h3>Expenses graph</h3>
      <Bar data={graphData} options={{ maintainAspectRatio: false }} />
    </div>
  );
}

export default ExpensesGraph;

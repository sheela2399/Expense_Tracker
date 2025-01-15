import React from 'react';
import { Bar } from 'react-chartjs-2';

function ExpensesGraph({ expenseData }) {
  if (!expenseData || expenseData.length === 0) {
    return <div>No Expenses to Display</div>;
  }

  const chartData = {
    labels: expenseData.map(exp => exp.date),
    datasets: [
      {
        label: 'Expenses',
        data: expenseData.map(exp => exp.amount),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // console.log("Expense Data in Graph:", filteredExpenses);

  return (
    <div className="chart-container">
      <h2>Expenses Graph</h2>
      <Bar data={chartData} />
    </div>
  );
}

export default ExpensesGraph;

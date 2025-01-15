import React from 'react';
import { Pie } from 'react-chartjs-2';

function ExpenseChart({ newExpense }) {
  if (!newExpense || newExpense.length === 0) {
    return <div>No Expenses to Display</div>;
  }

  const chartData = {
    labels: newExpense.map(exp => exp.category),
    datasets: [
      {
        label: 'Expenses',
        data: newExpense.map(exp => exp.amount),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      },
    ],
  };

  return (
    <div className="chart-container">
      <h2>Expense Chart</h2>
      <Pie data={chartData} />
    </div>
  );
}

export default ExpenseChart;

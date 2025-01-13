import React from "react";

function ExpensesTable({ expenses, onEdit, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Sr.</th>
          <th>Expense</th>
          <th>Amount</th>
          <th>Edit / Delete</th>
        </tr>
      </thead>
      <tbody>
        {/* {expenses.map((expense, index) => (
          <tr key={expense.id}>
            <td>{index + 1}</td>
            <td>{expense.name}</td>
            <td>₹{expense.amount}</td>
            <td>
              <button onClick={() => onEdit(expense)}>Edit</button>
              <button onClick={() => onDelete(expense.id)}>Delete</button>
            </td>
          </tr>
        ))} */}
      </tbody>
    </table>
  );
};

export default ExpensesTable;

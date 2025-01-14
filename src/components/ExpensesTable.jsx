import React, { useState } from "react";

function ExpensesTable({ expense, handleDelete, handleEdit }) {

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
        {expense.map((exp, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{exp.name}</td>
            <td>{exp.amount}</td>
            <td className="action-div">
              <button className="edit-button" onClick={() => handleEdit(index)}>Edit</button>
              <button className="delete-button" onClick={() => handleDelete(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpensesTable;

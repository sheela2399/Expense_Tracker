import React, { useState } from "react";
import DeleteExpense from "./DeleteExpense";
import edit from "../assets/edit.svg"
import trash from "../assets/trash.svg"

function ExpensesTable({ expense, handleDelete, handleEdit }) {
  const [deleteIndex, setDeleteIndex] = useState(null); // Track which row's delete button was clicked

  const openDeletePopup = (index) => {
    setDeleteIndex(index);
  };

  const closeDeletePopup = () => {
    setDeleteIndex(null);
  };

  const confirmDelete = () => {
    if (deleteIndex !== null) {
      handleDelete(deleteIndex);
      alert("Expense deleted!");
      // closeDeletePopup();
      setDeleteIndex(null);
    }
  };


  return (
    <>    
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
              <button className="edit-button" onClick={() => handleEdit(index)}> <img src={edit} alt="" /> Edit</button>
              <button className="delete-button" onClick={() => openDeletePopup(index)}> <img src={trash} alt="" />Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

{deleteIndex !== null && (
  <DeleteExpense
    handleDelete={confirmDelete}
    handleCancel={closeDeletePopup}
  />
)}
</>
  );
}

export default ExpensesTable;

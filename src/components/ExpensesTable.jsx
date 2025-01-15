import React, { useState } from "react";
import DeleteExpense from "./DeleteExpense";
import edit from "../assets/edit.svg"
import trash from "../assets/trash.svg"
import EditExpense from "./EditExpense";

function ExpensesTable({ expense, handleDelete,setExpense }) {
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [editIndex, setEditIndex] = useState(null); // Track which expense to edit
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);

  const openEditPopup = (index) => {
    setEditIndex(index);
    setIsEditPopupOpen(true);
  };

  const closeEditPopup = () => {
    setEditIndex(null);
    setIsEditPopupOpen(false);
  };

  const handleSaveEdit = (updatedExpense) => {
    setExpense((prevExpenses) =>
      prevExpenses.map((exp, index) =>
        index === editIndex ? { ...exp, ...updatedExpense } : exp
      )
    );
    closeEditPopup();
  };
  

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
                <button className="edit-button" onClick={() => openEditPopup(index)}> <img src={edit} alt="" /> Edit</button>
                <button className="delete-button" onClick={() => openDeletePopup(index)}> <img src={trash} alt="" />Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isEditPopupOpen && (
        <EditExpense
          expenseToEdit={expense[editIndex]}
          handleEdit={handleSaveEdit}
          handleCancel={closeEditPopup}
        />
      )}

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

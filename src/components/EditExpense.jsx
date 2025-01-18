import React, { useState } from "react";

function EditExpense({ expenseToEdit, handleEdit, handleCancel }) {
  const [editedExpenseName, setEditedExpenseName] = useState(expenseToEdit.name);
  const [editedExpenseAmount, setEditedExpenseAmount] = useState(expenseToEdit.amount);
  const [editedDate, setEditedDate] = useState(expenseToEdit.date);
  const [editedCategory, setEditedCategory] = useState(expenseToEdit.category);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedExpense = {
      name: editedExpenseName,
      amount: parseFloat(editedExpenseAmount) || 0,
      date: editedDate,
      category: editedCategory,
    };
    handleEdit(updatedExpense); // Call the parent component's edit handler
  };

  return (
    <>
      <div className="popup">
        <div className="popup-content">
          <div className="popup-head">
            <h2>Edit Expense</h2>
            <button type="button" className="close-button" onClick={handleCancel}>
              X
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <label>
              Expense Name:
              <input
                type="text"
                placeholder="Expense Name"
                value={editedExpenseName}
                onChange={(e) => setEditedExpenseName(e.target.value)}
                required
              />
            </label>
            <label>
              Date:
              <input
                type="date"
                value={editedDate}
                onChange={(e) => setEditedDate(e.target.value)}
                required
              />
            </label>
            <label>
              Category:
              <select
                value={editedCategory}
                onChange={(e) => setEditedCategory(e.target.value)}
                required
              >
                <option value="">Choose a category</option>
                <option value="Food">Food and Drinks</option>
                <option value="Travel">Travel</option>
                <option value="Health">Health</option>
                <option value="Groceries">Groceries</option>
                {/* <option value="Other">Other</option> */}
              </select>
            </label>
            <label>
              Amount:
              <input
                type="number"
                placeholder="Enter Amount"
                value={editedExpenseAmount}
                onChange={(e) => setEditedExpenseAmount(e.target.value)}
                required
              />
            </label>
            <div className="popup-edit-buttons">
              <button type="submit" className="submit-button">
                Save 
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditExpense;

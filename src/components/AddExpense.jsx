import React, { useState } from "react";
import { toast } from "react-toastify";

function AddExpense({handleExpense}) {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [expenseName, setExpenseName] = useState("");
    const [expenseAmount, setExpenseAmount] = useState("");
    const [date, setDate] = useState("");
    const [category, setCategory] = useState("");

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
        clearForm();
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!expenseName || !expenseAmount || !date || !category) {
            alert("Please fill in all fields.");
            return;
        }

        const newExpense = {
            name: expenseName,
            amount: parseFloat(expenseAmount) || 0,
            date,
            category,
        };

        handleExpense(newExpense);
        // Pass the new expense back to the parent component
        toast.success("Added Expense Succesfully")
        clearForm();
        closePopup();
    };

    const clearForm = () => {
        setExpenseName("");
        setExpenseAmount("");
        setDate("");
        setCategory("");
    };

    const todayDate = new Date().toISOString().split("T")[0]; 

    return (
        <>
            <button className="add-expense-button" onClick={openPopup}>
                + Add Expense
            </button>

            {isPopupOpen && (
                <div className="popup">
                    <div className="popup-content">
                        <div className="popup-head">
                            <h2>Add Expense</h2>
                            <button type="button" className="close-button" onClick={closePopup}>
                                X
                            </button>
                        </div>
                        <form >
                            <label>
                                Expense Name:
                                <input
                                    type="text"
                                    placeholder="Expense Name"
                                    value={expenseName}
                                    onChange={(e) => setExpenseName(e.target.value)}
                                    required
                                />
                            </label>
                            <label>
                                Date:
                                <input
                                    type="date"
                                    value={date}
                                    max={todayDate}
                                    onChange={(e) => setDate(e.target.value)}
                                    required
                                />
                            </label>
                            <label>
                                Category:
                                <select
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
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
                                    value={expenseAmount}
                                    onChange={(e) => setExpenseAmount(e.target.value)}
                                    required  
                                    min="0" />
                            </label>
                            <button type="submit" className="submit-button" onClick={handleSubmit}>
                                Add Expense
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default AddExpense;

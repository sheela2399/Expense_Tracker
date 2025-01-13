import React, { useState } from "react";

function AddExpense() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [expenseAmount, setExpenseAmount] = useState("");
    const [date, setDate ] = useState("");
    const [category, setCategory] = useState("choose");
    const [input, setInput] = useState("");

    const handleChange = (event) => {
        setExpenseAmount(event.target.value);
    }

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setExpenseAmount("");
        closePopup
    }

    

    return (
        <>
            <button className="add-budget-button" onClick={openPopup} > + Add Expense</button>

            {isPopupOpen && (
                <div className="popup">
                    <div className="popup-content">
                        <div className="popup-head">
                            <h2>Add Expense</h2>
                            <button type="button" onClick={closePopup}> X </button>
                        </div>
                        <form >
                            <label>
                                Expense Name:
                                <input type="text" name="expenseName" placeholder="Expense Name" required />
                            </label>
                            <label>
                                Date:
                                <input type="date" name="date" required />
                            </label>
                            <label>
                                Category:
                                <select name="category" required>
                                    <option value="">Choose a category</option>
                                    <option value="Food">Food</option>
                                    <option value="Travel">Travel</option>
                                    <option value="Health">Health</option>
                                    <option value="Groceries">Groceries</option>
                                    <option value="Other">Other</option>
                                </select>
                            </label>
                            <label>
                                Amount:
                                <input type="number" name="amount" placeholder="Enter Amount" value={expenseAmount} onChange={handleChange} required />
                            </label>
                            <button type="submit" onClick={handleSubmit}>Add Expense</button>
                        </form>
                    </div>
                </div>
            )}

            {/* <div className="expense-list">
                {expense.length > 0 ? (
                    <ul>
                        {expenses.map((expense, index) => (
                            <li key={index}>
                                {expense.name} - ₹{expense.amount} ({expense.category}) on {expense.date}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No Expenses!!!</p>
                )}
            </div> */}
        </>
    )
}

export default AddExpense;
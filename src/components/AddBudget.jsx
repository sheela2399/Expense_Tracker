import React, { useState } from "react";

function AddBudget({handleBudget}) {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [budgetAmount, setBudgetAmount] = useState(0);

    const handleChange = (event) => {
        setBudgetAmount(event.target.value);
    }

    const openPopup = () => {
        setIsPopupOpen(true);
      };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleBudget(budgetAmount)
        setBudgetAmount("");
        closePopup()
    }

    return (
        <>
        <button className="add-budget-button" onClick={openPopup}>
          + Add Budget
        </button>

            {isPopupOpen && (
                <div className="popup">
                    <div className="popup-content">
                        <div className="popup-head">                       
                            <h2>Add Budget</h2>
                        <button type="button" onClick={closePopup}>X</button> </div>
 
                        <form >
                            <label>
                                Amount:
                                <input type="number" name="amount" placeholder="Enter Amount" onChange={handleChange} value={budgetAmount} required min="0"/>
                            </label>
                            <button onClick={handleSubmit} type="submit">Submit Budget</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}

export default AddBudget;
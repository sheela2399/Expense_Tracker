import React, { useState } from "react";
import food from "../assets/food.svg";
import groceries from "../assets/groceries.svg";
import expenses from "../assets/expenses.svg"
import travel from "../assets/travel.svg";
import health from "../assets/health.svg";
import { IoSearchOutline } from "react-icons/io5";
import AddBudget from "./AddBudget";
import AddExpense from "./AddExpense";


function Buttons({ handleBudget, handleExpense, setSelectedCategory, setSearchValue  }) {
    // const [searchValue, setSearchValue] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");


    const handleSearchChange = (e) => {
        setSearchValue(e.target.value); 
      };

    const handleFilterClick = (category) => {
        setSelectedCategory(category);
        setActiveCategory(category);
    }
    return (
        <>
            <div className="filters">
                <div className="search">
                    <div className="search-in">
                        <IoSearchOutline className="search-icon" />
                        <input type="text"
                            placeholder="search"
                            // value={searchValue}
                            onChange={handleSearchChange}
                        />
                    </div>
                    <div className="category-buttons">
                        <button className={`category-btn ${activeCategory === "All" ? "selected" : ""}`}
 
                        onClick={() => handleFilterClick("All")}>
                            <img src={expenses} alt="expenses" className="category-icon" /> All Expenses
                        </button>

                        <button className={`category-btn ${activeCategory === "Food" ? "selected" : ""}`}
                        onClick={() => handleFilterClick("Food")}>
                            <img src={food} alt="food" className="category-icon" /> Food & Drinks
                        </button>

                        <button className={`category-btn ${activeCategory === "Groceries" ? "selected" : ""}`}
                        onClick={() => handleFilterClick("Groceries")}>
                            <img src={groceries} alt="groceries" className="category-icon" /> Groceries
                        </button>

                        <button className={`category-btn ${activeCategory === "Travel" ? "selected" : ""}`}
                        onClick={() => handleFilterClick("Travel")}>
                            <img src={travel} alt="travel-icon" className="category-icon" /> Travel
                        </button>

                        <button className={`category-btn ${activeCategory === "Health" ? "selected" : ""}`}
                        onClick={() => handleFilterClick("Health")}>
                            <img src={health} alt="health-icon" className="category-icon" /> Health
                        </button>
                    </div>

                    <div className="action-buttons">
                        <AddBudget handleBudget={handleBudget} />
                        <AddExpense handleExpense={handleExpense} />
                    </div>
                </div>
            </div>
        </>

    )

}

export default Buttons;
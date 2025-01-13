import React from "react";

function BudgetCard(props) {
    return (
        <>
            <div className="budget-cards">
                <div className="card">
                    <div className="card-content">
                        <p>{props.name}</p>
                        <h1>
                            <span>&#8377;</span>
                            {props.amount}
                        </h1>
                    </div>
                    <img src={props.img} alt="" className="card-icon" />

                </div>
            </div>
            
        </>
    )
}

export default BudgetCard;
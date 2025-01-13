import React from "react";

function Delete ({ onConfirm, onCancel }){
    return(
  <div className="deleteDiv">
    <h3>Are you Sure?</h3>
    <p>You won't be able to revert this!</p>
    <button onClick={onConfirm}>Delete</button>
    <button onClick={onCancel}>Cancel</button>
  </div>
)};

export default Delete;

import React from "react";
import exclamation from "../assets/exclamation.png"

function DeleteExpense({ handleDelete, handleCancel }) {
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  return (
    <>
      <button> Delete </button>

      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <img src={exclamation} alt="exclamation" className="popup-icon" />
            <h3>Are You Sure ?</h3>
            <p>You wont be able to revert this!</p>
            <div className="popup-buttons">
              <button className="delete-btn" onClick={() => { handleDelete(); setIsPopupOpen(false); }}>
                Delete
              </button>
              <button className="cancel-btn" onClick={() => { handleCancel(); setIsPopupOpen(false); }}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DeleteExpense;


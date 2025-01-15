import React from "react";
import exclamation from "../assets/exclamation.png"

function DeleteExpense({ handleDelete, handleCancel }) {
  // const [isPopupOpen, setIsPopupOpen] = useState(true);

  return (
    <>
        <div className="popup">
          <div className="popup-content-alert">
            <img src={exclamation} alt="exclamation" className="popup-alert-icon" />
            <h3>Are You Sure ?</h3>
            <p>You wont be able to revert this!</p>
            <div className="popup-alert-buttons">
              <button className="delete-btn" onClick={() => { handleDelete();  }}>
                Delete
              </button>
              <button className="cancel-btn" onClick={() => { handleCancel();  }}>
                Cancel
              </button>
            </div>
          </div>
        </div>
    </>
  );
}

export default DeleteExpense;


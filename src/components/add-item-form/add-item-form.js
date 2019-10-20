import React from "react";
import "./add-item-form.css";

const AddItemForm = ({ onAddItemClick }) => {
  return (
    <div className="add-item-form">
      <button
        className="btn btn-info"
        onClick={() => onAddItemClick("Hello world")}
      >
        Add item
      </button>
    </div>
  );
};

export default AddItemForm;

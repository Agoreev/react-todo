import React from "react";
import "./todo-list-item.css";

const TodoListItem = ({ label, important = false }) => {
  const style = {
    color: important ? "steelBlue" : "black",
    fontWeight: important ? "bold" : "normal"
  };

  return (
    <span className="todo-list-item d-flex">
      <span className="todo-list-item-label" style={style}>
        {label}
      </span>

      <button type="button" className="btn btn-outline-success btn-sm">
        <i className="fa fa-exclamation"></i>
      </button>
      <button type="button" className="btn btn-outline-danger btn-sm">
        <i className="fa fa-trash-o"></i>
      </button>
    </span>
  );
};

export default TodoListItem;

import React, { Component } from "react";
import "./todo-list-item.css";

export default class TodoListItem extends Component {
  state = {
    done: false,
    important: false
  };
  onLabelClick = () => {
    this.setState(state => {
      return {
        done: !state.done
      };
    });
  };
  onMarkImportant = () => {
    this.setState(state => {
      return {
        important: !state.important
      };
    });
  };

  render() {
    const { label, onDeleted } = this.props;
    const { done, important } = this.state;

    let classNames = "todo-list-item d-flex";
    if (done) {
      classNames += " done";
    }
    if (important) {
      classNames += " important";
    }

    return (
      <span className={classNames}>
        <span
          className="todo-list-item-label"
          onClick={this.onLabelClick.bind(this)}
        >
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm"
          onClick={this.onMarkImportant}
        >
          <i className="fa fa-exclamation"></i>
        </button>
        <button
          type="button"
          className="btn btn-outline-danger btn-sm"
          onClick={onDeleted}
        >
          <i className="fa fa-trash-o"></i>
        </button>
      </span>
    );
  }
}

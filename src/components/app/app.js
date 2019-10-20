import React, { Component } from "react";

import AppHeader from "../app-header";
import TodoList from "../todo-list";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import "./app.css";
import AddItemForm from "../add-item-form";

export default class App extends Component {
  maxId = 100;
  state = {
    todoData: [
      { id: 1, label: "Drink coffee", important: false },
      { id: 2, label: "Make awesome app", important: true },
      { id: 3, label: "Have a lunch", important: false }
    ]
  };

  deleteItem = id => {
    this.setState(({ todoData }) => {
      const newTodoData = todoData.filter(item => item.id !== id);
      return {
        todoData: newTodoData
      };
    });
  };

  addItem = text => {
    const newItem = { label: text, important: false, id: this.maxId++ };
    this.setState(({ todoData }) => {
      const newTodoData = [...todoData, newItem];
      return {
        todoData: newTodoData
      };
    });
  };

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={2} done={1} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList todos={this.state.todoData} onDeleted={this.deleteItem} />
        <AddItemForm onAddItemClick={this.addItem} />
      </div>
    );
  }
}

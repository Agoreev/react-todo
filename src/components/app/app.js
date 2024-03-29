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
      this.createTodoItem("Drink coffee"),
      this.createTodoItem("Make awesome app"),
      this.createTodoItem("Have a lunch")
    ],
    search: "",
    currentFilter: "active"
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    };
  }

  deleteItem = id => {
    this.setState(({ todoData }) => {
      const newTodoData = todoData.filter(item => item.id !== id);
      return {
        todoData: newTodoData
      };
    });
  };

  addItem = text => {
    const newItem = this.createTodoItem(text);
    this.setState(({ todoData }) => {
      const newTodoData = [...todoData, newItem];
      return {
        todoData: newTodoData
      };
    });
  };

  togglePropety(arr, id, propName) {
    const idx = arr.findIndex(el => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }

  onToggleImportant = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.togglePropety(todoData, id, "important")
      };
    });
  };
  onToggleDone = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.togglePropety(todoData, id, "done")
      };
    });
  };
  onSearchType = searchString => {
    this.setState({
      search: searchString
    });
  };
  onChangeFilter = filter => {
    this.setState({
      currentFilter: filter
    });
  };

  search(items, searchString) {
    if (searchString.length === 0) {
      return items;
    }
    const lowerSearch = searchString.toLowerCase();
    return items.filter(el => el.label.toLowerCase().includes(lowerSearch));
  }

  filter(items, currentFilter) {
    switch (currentFilter) {
      case "all":
        return items;
      case "done":
        return items.filter(el => el.done);
      case "active":
        return items.filter(el => !el.done);
      default:
        return items;
    }
  }

  render() {
    const { todoData, search, currentFilter } = this.state;
    const data = this.filter(this.search(todoData, search), currentFilter);
    const doneCount = todoData.filter(el => el.done).length;
    const todoCount = todoData.length - doneCount;
    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearchType={this.onSearchType} />
          <ItemStatusFilter
            currentFilter={currentFilter}
            onChangeFilter={this.onChangeFilter}
          />
        </div>

        <TodoList
          todos={data}
          onDeleted={this.deleteItem}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
        />
        <AddItemForm onAddItem={this.addItem} />
      </div>
    );
  }
}

import React from "react";

import AppHeader from "../app-header";
import TodoList from "../todo-list";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import "./app.css";

const App = () => {
  const todoData = [
    { id: 1, label: "Drink coffee", important: false },
    { id: 2, label: "Make awesome app", important: true },
    { id: 3, label: "Have a lunch", important: false }
  ];
  return (
    <div className="todo-app">
      <AppHeader toDo={2} done={1} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList todos={todoData} />
    </div>
  );
};

export default App;

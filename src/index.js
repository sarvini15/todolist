import React from "react";
import ReactDOM from "react-dom";

import TodoList from "./components/todo_lists";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <TodoList />
  </div>
);

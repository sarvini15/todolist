import { useState } from "react";


import TodoList from "./components/todo_lists";

export default function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <div className="container">
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

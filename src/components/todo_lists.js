import TodoItem from "./todo-item";
import Form from "./add-new-form";

export default function TodoList() {
  const todos = [
    {
      id: 1,
      text: "Task 1",
      isCompleted: true,
    },
    {
      id: 2,
      text: "Task 2",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Task 3",
      isCompleted: false,
    },
  ];
  return (
    <div
      className="card rounded shadow-sm mx-auto my-4"
      style={{ maxWidth: "500px" }}
    >
      <div className="card-body">
        {todos.map((todos) => {
          return <TodoItem name={todos.text} />;
        })}
        <Form />
      </div>
    </div>
  );
}

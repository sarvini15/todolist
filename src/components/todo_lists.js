import TodoItem from "./todo-item";
import Form from "./add-new-form";

export default function TodoList(props) {
  const { todos, setTodos } = props;
  // {
  //   id: 1,
  //   text: "Task 1",
  //   isCompleted: true,
  // },
  // {
  //   id: 2,
  //   text: "Task 2",
  //   isCompleted: false,
  // },
  // {
  //   id: 3,
  //   text: "Task 3",
  //   isCompleted: false,
  // },

  return (
    <div
      className="card rounded shadow-sm mx-auto my-4"
      style={{ maxWidth: "500px" }}
    >
      <div className="card-body">
        {todos.map((todo, index) => {
          const { name, id } = todo;
          return (
            <TodoItem
              key={id} // unique
              id={id}
              name={name}
              num={index + 1}
              onDelete={(id) => {
                // long method
                // const newtodos = todos.filter((s) => {
                //   return s.id !== id;
                // });
                // settodos(newtodos);
                // short method
                setTodos(todos.filter((s) => s.id !== id));
              }}
            />
          );
        })}

        <Form todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

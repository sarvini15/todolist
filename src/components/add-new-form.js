import { useState } from "react";

export default function Form(props) {
  const { todos, setTodos, onClick } = props;
  const [value, setValue] = useState("");
  return (
    <div class="mt-4">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setTodos([
            ...todos,
            {
              id: Math.random(), // to ensure unique id
              name: value
            },
          ]);
          setValue("");
        }}
        class="d-flex justify-content-between align-items-center"
      >
        <input
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
          type="text"
          class="form-control"
          placeholder="Add new item..."
          required
        />
        <button onClick={onClick} class="btn btn-primary btn-sm rounded ms-2">
          Add
        </button>
      </form>
    </div>
  );
}

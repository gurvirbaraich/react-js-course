import { useEffect, useState } from "react";

export default function TodoInput() {
  // Initializes @todo with empty string
  const [todoTitle, setTodoTitle] = useState("");

  // Initializes @todos with empty array
  const [todos, setTodos] = useState([]);

  // Called when value inside the input changes.
  const handleChange = (event) => {
    // Set the value of @todo to a new value from the input.
    setTodoTitle(event.target.value);
  };

  // Called when the form is submitted.
  const handleSubmit = (event) => {
    // prevent the default behavior of the form element.
    event.preventDefault();

    // Created todo object
    const todo = {
      title: todoTitle,
      completed: false,
    };

    // Appending new todo item in the list.
    setTodos([...todos, todo]);

    // Empty the value of input.
    setTodoTitle("");
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <form onSubmit={handleSubmit}>
      <input value={todoTitle} onChange={handleChange} />
      <button>Add todo</button>
    </form>
  );
}

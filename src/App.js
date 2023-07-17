import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import Todo from "./components/Todo";

export default function App() {
  // Initializes @todos with empty array
  const [todos, setTodos] = useState([]);

  const completeTodo = (todo) => {
    // Reversing the value of completed property inside @todo
    todo.completed = !todo.completed;

    // Making a duplicate of array
    const updated_todos = [...todos];

    // Replacing the previous todo object with the updated todo
    updated_todos[todo.id] = todo;

    setTodos(updated_todos);
  };

  // Function to delete a todo
  function deleteTodo(todo) {
    // Make clone of the @todos array
    const updated_todos = [...todos];

    const todo_index = updated_todos.indexOf(todo);

    // Removing the todo from the array
    updated_todos.splice(todo_index, 1);

    setTodos(updated_todos);
  }

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-slate-900">
      <div className="max-w-md min-h-[28rem] bg-white min-w-[24rem] rounded-lg overflow-hidden p-3">
        <TodoInput setTodos={setTodos} todos={todos} />

        <div className="mt-3">
          <ul className="flex flex-col gap-2 max-h-80 overflow-y-scroll todo-container">
            {todos.map((todo, idx) => (
              <Todo
                key={idx}
                deleteTodo={deleteTodo}
                completeTodo={completeTodo}
                todo={todo}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/**
 * Features
 * - Add
 * - List
 * - Update
 * - Delete
 * - Complete
 */

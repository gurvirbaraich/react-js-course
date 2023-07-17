import { useEffect, useState } from "react";

export default function TodoInput({ todos, setTodos }) {
  // Random task
  const [randomTask, setRandomTask] = useState("");

  // Initializes @todo with empty string
  const [todoTitle, setTodoTitle] = useState("");

  // Called when value inside the input changes.
  const handleChange = (event) => {
    // Set the value of @todo to a new value from the input.
    setTodoTitle(event.target.value);
  };

  function generateRandomID(length = 8) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

  // Called when the form is submitted.
  const handleSubmit = (event) => {
    // prevent the default behavior of the form element.
    event.preventDefault();

    // Created todo object
    const todo = {
      id: generateRandomID(),
      title: todoTitle,
      completed: false,
    };

    // Appending new todo item in the list.
    setTodos([...todos, todo])

    // Empty the value of input.
    setTodoTitle("");
  };

  // Function to return random task
  function getRandomTask() {
    const tasks = [
      "Do the dishes",
      "Go to the gym",
      "Take a walk",
      "Play a game",
      "Sing a song",
    ];

    return tasks[Math.floor(Math.random() * tasks.length)];
  }
  
  useEffect(() => {
    setRandomTask(getRandomTask());

    setInterval(() => {
      setRandomTask(getRandomTask());
    }, 2000)
  }, [])

  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
      <input className="w-full p-3 border rounded font-poppins" value={todoTitle} onChange={handleChange} placeholder={randomTask} />
      <button className="p-3 rounded bg-indigo-300 font-poppins w-40">Add todo</button>
    </form>
  );
}

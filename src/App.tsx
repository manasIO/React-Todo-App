import { useState } from "react";
import './App.css';


interface item {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<item[]>([
    { id: 1, text: "Work on algorithms homework #7", completed: false },
    { id: 2, text: "make a react protfolio", completed: false },
    { id: 3, text: "learn buffer-overflow", completed: false },
  ]);

  const [input, setInput] = useState<string>("");

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleSwipe = (id: number) => {
    handleDelete(id);
  };

  const handleClick = () => {
    const newTodo: item = { id: Date.now(), text: input, completed: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="App">
      <h1> Todo List </h1>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => handleToggle(todo.id)}
            onTouchEnd={() => handleSwipe(todo.id)}
            style={{ 
              textDecoration: todo.completed ? "line-through" : "none",
              transition: "transform 0.3s ease-out",
              fontSize: "20px",
              padding: "10px",
              border: "1px solid #ccc",
              marginBottom: "10px",
              borderRadius: "5px",
            }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add todo item"
        onChange={(e) => setInput(e.currentTarget.value)}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;

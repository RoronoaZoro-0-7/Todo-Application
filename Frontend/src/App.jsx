import { useState, useEffect } from "react";
import { CreatTodo } from "./components/CreatTodo";
import { Todos } from "./components/Todos";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos").then(async (res) => {
      const json = await res.json();
      setTodos(json);
    });
  }, []);

  return (
    <div className="container">
      <CreatTodo />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
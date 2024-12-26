import { useState } from "react";

export function CreatTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Enter title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: title,
              description: description,
            }),
          }).then(async (res) => {
            const json = await res.json();
            alert("Todo added");
          });
        }}
      >
        Add Todo
      </button>
    </div>
  );
}

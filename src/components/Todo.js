import React, { useState } from "react";
import "./Todo.css";
import { v4 as uuidv4 } from "uuid";

function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    const todo = { id: uuidv4(), input: input };
    setTodos([...todos, todo]);

    // setTodos((todos) => {
    //   return [...todos, todo];
    // });
    setInput("");
  };

  const removeTodo = (id) => {
    let newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="todo">
      <form>
        <input
          className="todo__input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="todo__btn" onClick={addTodo}>
          Add
        </button>
      </form>

      {todos.map((todo) => {
        const { id, input } = todo;
        return (
          <div key={id} className="todo__single">
            <h3>{input}</h3>
            <button className="todo__remove-btn" onClick={() => removeTodo(id)}>
              Remove
            </button>
          </div>
        );
      })}

      <button className="todo__clear-btn" onClick={() => setTodos([])}>
        Clear All
      </button>
    </div>
  );
}

export default Todo;

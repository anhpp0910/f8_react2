import React from "react";
import { useRef } from "react";
import { useStore, actions } from "../store";

export default function App15() {
  const [state, dispatch] = useStore();
  const { todos, todoInput } = state;
  const inputRef = useRef();

  const handleAdd = () => {
    dispatch(actions.addTodo(todoInput));
    dispatch(actions.setTodoInput(""));
    inputRef.current.focus();
  };

  return (
    <div className="App" style={{ width: "80%", margin: "50px auto" }}>
      <input
        ref={inputRef}
        value={todoInput}
        placeholder="Enter todo..."
        onChange={(e) => {
          dispatch(actions.setTodoInput(e.target.value));
        }}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

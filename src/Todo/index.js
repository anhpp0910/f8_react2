import { useReducer, useRef } from "react";
import reducer, { initState } from "./reducer";
import { setTask, addTask, deleteTask } from "./action";
import logger from "./logger";

function App13() {
  const [state, dispatch] = useReducer(logger(reducer), initState);
  const { task, tasks } = state;
  const inputRef = useRef();

  const handleSubmit = () => {
    dispatch(addTask(task));
    dispatch(setTask(""));
    inputRef.current.focus();
  };

  return (
    <div className="App" style={{ width: "80%", margin: "50px auto" }}>
      <h3>TODO LIST</h3>
      <input
        ref={inputRef}
        value={task}
        placeholder="Enter todo..."
        onChange={(e) => {
          dispatch(setTask(e.target.value));
        }}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}{" "}
            <button
              onClick={() => {
                dispatch(deleteTask(index));
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App13;

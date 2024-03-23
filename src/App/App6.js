import { useState } from "react";

function App6() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(() => {
    const storageTasks = JSON.parse(localStorage.getItem("TASKS_LOCAL"));
    return storageTasks ?? [];
  });

  const handleSubmit = () => {
    setTasks((prev) => {
      const newTaks = [...prev, task];
      const jsonTasks = JSON.stringify(newTaks);
      localStorage.setItem("TASKS_LOCAL", jsonTasks);
      return newTaks;
    });
    setTask("");
  };

  return (
    <div className="App6" style={{ width: "80%", margin: "50px auto" }}>
      <input value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App6;

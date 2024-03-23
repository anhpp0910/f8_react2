import { useState } from "react";

// Response from API
const courses = [
  {
    id: 1,
    name: "HTML, CSS",
  },
  {
    id: 2,
    name: "Javascript",
  },
  {
    id: 3,
    name: "ReactJS",
  },
];

function App4() {
  const [checked, setChecked] = useState(2);
  console.log(checked);
  const handleSubmit = () => {
    // CALL API
    console.log({ id: checked });
  };
  return (
    <div className="App4" style={{ width: "80%", margin: "50px auto" }}>
      {courses.map((course) => (
        <div key={course.id}>
          <input
            type="radio"
            checked={course.id === checked}
            onChange={() => setChecked(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default App4;

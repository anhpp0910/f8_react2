import { useState } from "react";

function App3() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    // CALL API
    console.log({
      name,
      email,
    });
  };
  return (
    <div className="App3" style={{ width: "80%", margin: "50px auto" }}>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={email} onChange={(e) => setEmail(e.target.value)} />

      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default App3;

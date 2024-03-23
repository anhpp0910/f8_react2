import { useState } from "react";

const orders = [100, 200, 300];

function App() {
  const [info, setInfo] = useState({
    name: "AnhPP",
    age: 24,
    address: "HCM",
  });
  const handleUpdate = () => {
    setInfo({
      ...info,
      bio: "Yêu ThienNT ^^",
    });
  };
  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default App;

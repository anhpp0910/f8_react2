import { useState } from "react";

const gifts = ["CPU i9", "RAM 32GB RGB", "RGB Keyboard"];

function App2() {
  const [gift, setGift] = useState();
  const handleGetGift = () => {
    const index = Math.floor(Math.random() * gifts.length);
    setGift(gifts[index]);
  };
  return (
    <div className="App2" style={{ width: "80%", margin: "50px auto" }}>
      <h1>{gift || "Chưa có phần thưởng"}</h1>
      <button onClick={handleGetGift}>Lấy thưởng</button>
    </div>
  );
}

export default App2;

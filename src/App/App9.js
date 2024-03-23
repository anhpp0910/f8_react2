import { useState } from "react";
import Content8 from "../Content/Content8";

// 1. memo() -> Higher Order Component (HOC)
// 2. useCallback()

// Hooks
// HOC
// Render props

function App9() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div className="App" style={{ width: "80%", margin: "50px auto" }}>
      <Content8 count={count} />
      <h1>{count}</h1>
      <button onClick={increase}>Click me!</button>
    </div>
  );
}

export default App9;

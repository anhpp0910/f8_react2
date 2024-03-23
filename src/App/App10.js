import { useState, useCallback } from "react";
import Content8 from "../Content/Content8";

// 1. memo() -> Higher Order Component (HOC)
// 2. useCallback()
//    - Reference types
//    - React memo()

// Hooks
// HOC
// Render props

function App10() {
  const [count, setCount] = useState(0);

  const handleIncrease = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div className="App" style={{ width: "80%", margin: "50px auto" }}>
      <Content8 onIncrease={handleIncrease} />
      <h1>{count}</h1>
    </div>
  );
}

export default App10;

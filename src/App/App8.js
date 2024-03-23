import { useState, useRef, useEffect } from "react";

// Lưu các giá trị qua một tham chiếu bên ngoài
// Functional component

function App8() {
  const [count, setCount] = useState(60);

  const timerId = useRef();
  const prevCount = useRef();
  const h1Ref = useRef();

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  useEffect(() => {
    const rect = h1Ref.current.getBoundingClientRect();
    console.log(h1Ref.current);
    console.log(rect);
  });

  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
    console.log("start", timerId.current);
  };
  const handleStop = () => {
    clearInterval(timerId.current);
    console.log("stop", timerId.current);
  };

  console.log(count, prevCount.current);

  return (
    <div className="App" style={{ width: "80%", margin: "50px auto" }}>
      <h1 ref={h1Ref}>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default App8;

import React from "react";
import { memo } from "react";

// ===
// Pure component

function Content8({ onIncrease }) {
  console.log("re-render");
  return (
    <>
      <h2>HELLO ANH EM F8!</h2>
      <button onClick={onIncrease}>Click me!</button>
    </>
  );
}

export default memo(Content8);

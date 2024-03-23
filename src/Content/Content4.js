import React from "react";
import { useEffect, useState } from "react";

// Side effects

// Events: Add / remove event listener
// Observer pattern: Subscribe / Unsubscribe
// Closure
// Timers: setInterval, setTimeout, clearInterval, clearTimeout
// useState
// mounted / unmounted
// ===
// Call API

/*
1. Update DOM
   - F8 blog title
2. Call API
3. Listen DOM events
   - Scroll
   - Resize
4. Clean up
   - Remove listener / Unsubscribe
   - Clear timer
*/

// 1. useEffect(callback)
// - Gọi callback mỗi khi component re-render
// - Gọi callback sau khi component thêm element vào DOM

// 2. useEffect(callback, [])
// - Chỉ gọi callback 1 lần sau khi component mounted

// 3. useEffect(callback, [deps])
// Callback sẽ được gọi lại mỗi khi deps thay đổi

// ------------- Common
// 1. Callback luôn được gọi sau khi component mounted
// 2. Cleanup function luôn được gọi trước khi component unmounted
// 3. Cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted)

export default function Content4() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log("Mounted or Re-render");

    // Cleanup
    return () => {
      console.log("Cleanup");
    };
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
    </div>
  );
}

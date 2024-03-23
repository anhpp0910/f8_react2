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

export default function Content2() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    console.log("add");
    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("remove");
    };
  }, []);

  return (
    <div>
      <h1>{width}</h1>
    </div>
  );
}

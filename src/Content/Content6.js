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

const lessons = [
  {
    id: 1,
    name: "ReactJS là gì? Tại sao nên học ReactJS?",
  },
  {
    id: 2,
    name: "SPA/MPA là gì?",
  },
  {
    id: 3,
    name: "Arrow function",
  },
];

export default function Content6() {
  const [lessonId, setLessonId] = useState(1);

  useEffect(() => {
    const handleComment = ({ detail }) => {
      console.log(detail);
    };
    window.addEventListener(`lesson-${lessonId}`, handleComment);
    // Cleanup
    return () => {
      window.removeEventListener(`lesson-${lessonId}`, handleComment);
    };
  }, [lessonId]);

  return (
    <div>
      <ul>
        {lessons.map((lesson) => (
          <li
            key={lesson.id}
            style={{
              cursor: "pointer",
              color: lessonId === lesson.id ? "red" : "#333",
            }}
            onClick={() => setLessonId(lesson.id)}
          >
            {lesson.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

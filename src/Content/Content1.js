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

const tabs = ["posts", "comments", "albums"];

export default function Content() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");
  const [showGoToTop, setShowGoToTop] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, [type]);

  useEffect(() => {
    document.title = title;
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowGoToTop(window.scrollY >= 200);
    };
    window.addEventListener("scroll", handleScroll);
    console.log("add");
    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
      console.log("remove");
    };
  }, []);

  return (
    <div>
      {tabs.map((tab) => (
        <button
          key={tab}
          style={
            type === tab
              ? {
                  color: "#fff",
                  backgroundColor: "#333",
                }
              : {}
          }
          onClick={() => setType(tab)}
        >
          {tab}
        </button>
      ))}
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}
      </ul>
      {showGoToTop && (
        <button
          style={{
            position: "fixed",
            right: 20,
            bottom: 20,
          }}
        >
          Go to top
        </button>
      )}
    </div>
  );
}

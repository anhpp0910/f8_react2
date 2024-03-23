import React from "react";
import { useRef, useEffect } from "react";
import Video from "../Content/Video";

export default function App16() {
  const videoRef = useRef();

  useEffect(() => {
    console.log(videoRef.current);
  });

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  return (
    <div className="App" style={{ width: "80%", margin: "50px auto" }}>
      <Video ref={videoRef} />
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
}

import video1 from "../videos/video1.MOV";
import { forwardRef, useImperativeHandle, useRef } from "react";

function Video(props, ref) {
  const videoRef = useRef();

  useImperativeHandle(ref, () => ({
    play() {
      videoRef.current.play();
    },
    pause() {
      videoRef.current.pause();
    },
  }));

  return <video ref={videoRef} src={video1} height="700px" />;
}

export default forwardRef(Video);

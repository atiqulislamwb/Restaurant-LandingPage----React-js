import React, { useState, useRef } from "react";
import "./Intro.css";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef();

  return (
    <div className="app__video">
      <video
        ref={videoRef}
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={() => {
            setPlayVideo(!playVideo);
            if (playVideo) {
              videoRef.current.pause();
            } else {
              videoRef.current.play();
            }
          }}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;

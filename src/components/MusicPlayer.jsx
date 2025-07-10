import React, { useState, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import "./MusicPlayer.css";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio("/musica.mp3"));

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      className="music-btn"
      onClick={togglePlay}
      aria-label="Control de música"
    >
      {isPlaying ? <FaPause /> : <FaPlay />}
    </button>
  );
}

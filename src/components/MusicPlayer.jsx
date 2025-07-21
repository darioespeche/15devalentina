import React, { useState, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import "./MusicPlayer.css";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/musica.mp3");
      audioRef.current.loop = true;
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current
        .play()
        .catch((err) =>
          console.log("Autoplay bloqueado en iOS hasta que se presione:", err)
        );
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

import React from "react";
import "./HeroSection.css";
import videoFondo from "../assets/video15.mp4";

export default function HeroSection() {
  return (
    <section className="hero-video-container">
      <video
        className="video-background"
        src={videoFondo}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="overlay-content">
        <h1>VALENTINA</h1>
        <p>MIS XV AÑOS</p>
        <div className="scroll-indicator">↓</div>
      </div>
    </section>
  );
}

import React from "react";
import "./HeroSection.css";
import fondo from "../assets/foto4.jpg"; // reemplazá con tu imagen

export default function HeroSection() {
  return (
    <div className="hero" style={{ backgroundImage: `url(${fondo})` }}>
      <div className="overlay">
        <h1>VALENTINA</h1>
        <p>MIS QUINCE AÑOS</p>
      </div>
    </div>
  );
}

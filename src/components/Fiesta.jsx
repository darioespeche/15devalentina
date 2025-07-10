import React from "react";
import "./Fiesta.css";
import { GiPartyPopper } from "react-icons/gi"; // ícono fiesta 🎉

export default function Fiesta() {
  return (
    <section className="fiesta-container">
      <GiPartyPopper className="fiesta-icon" />
      <h2 className="fiesta-titulo">FIESTA</h2>
      <p>Sábado 23 de noviembre</p>
      <p>21:00 a 05:00 hs.</p>
      <p>Zambra - Eventos Santiago del Estero</p>
      <p>Las Magnolias 3029, G4200</p>
      <p>
        Clickeá en el botón de abajo y encontrá las indicaciones para llegar,
        <br />
        ¡nos vemos! 🥰
      </p>

      <a
        className="boton-maps"
        href="https://www.google.com/maps/place/Zambra+-+Eventos+Santiago+del+Estero/@-27.8173585,-64.2397169,529m/data=!3m2!1e3!4b1!4m6!3m5!1s0x943b4e74b574a93f:0xd45e95d4bfb7bb9e!8m2!3d-27.8173633!4d-64.2371366!16s%2Fg%2F11clwhz6bc?entry=ttu&g_ep=EgoyMDI1MDcwNy4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
      >
        CÓMO LLEGAR
      </a>
    </section>
  );
}

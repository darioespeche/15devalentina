import React from "react";
import "./Fiesta.css";
import { GiPartyPopper } from "react-icons/gi";

export default function Fiesta() {
  return (
    <section className="fiesta-container">
      <GiPartyPopper className="fiesta-icon" />
      <h2>MI FIESTA</h2>
      <p>Sábado 23 de agosto</p>
      <p>22:00 a 06:00 hs.</p>
      <p>Salon Florentina Eventos</p>
      <p>Av. Victor Alcorta 3049, Santiago del Estero, Argentina</p>
      <p>
        Clickeá en el botón de abajo y encontrá las indicaciones para llegar,
        <br />
        ¡Nos vemos! 🥰
      </p>

      <a
        className="boton-maps"
        href="https://www.google.com/maps/place/Sal%C3%B3n+Florentina/@-27.818067,-64.2380646,575m/data=!3m2!1e3!4b1!4m6!3m5!1s0x943b4f1ba3ba79b1:0x7a0df18394f39be!8m2!3d-27.8180718!4d-64.2354897!16s%2Fg%2F11p0147nvj?entry=ttu&g_ep=EgoyMDI1MDcxMy4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
      >
        CÓMO LLEGAR
      </a>
    </section>
  );
}

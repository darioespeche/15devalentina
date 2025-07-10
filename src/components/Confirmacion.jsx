import React from "react";
import "./Confirmacion.css";
import { MdHowToReg } from "react-icons/md"; // ícono opcional

export default function Confirmacion() {
  return (
    <section className="confirmacion-container">
      <MdHowToReg className="confirmacion-icon" />
      <h2 className="confirmacion-titulo">CONFIRMACIÓN DE ASISTENCIA</h2>
      <p>
        Cuento con tu presencia.
        <br />
        ¡Confirmá tu asistencia!
      </p>

      <a
        className="boton-confirmar"
        href="https://forms.gle/DBQVuwLmUS4jfDNk9"
        target="_blank"
        rel="noopener noreferrer"
      >
        CONFIRMAR ASISTENCIA
      </a>
    </section>
  );
}

import React from "react";
import "./Confirmacion.css";
import { MdHowToReg } from "react-icons/md";

export default function Confirmacion() {
  return (
    <section className="confirmacion-container">
      <MdHowToReg className="confirmacion-icon" />
      <h2>CONFIRMACIÓN DE ASISTENCIA</h2>
      <p>
        ¡Contamos con tu presencia!
        <br />
        Confirmá tu asistencia haciendo clic abajo:
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

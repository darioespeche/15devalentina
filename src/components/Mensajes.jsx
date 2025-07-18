import React from "react";
import "./Mensajes.css";
import { FaRegEnvelope } from "react-icons/fa";

export default function Mensajes() {
  return (
    <section className="mensajes-container">
      <FaRegEnvelope className="mensajes-icon" />
      <h2>DEJÁ TU MENSAJE Y FOTO 💌</h2>
      <p>
        Podés escribirle unas palabras a Valentina y subir una foto que tengan
        juntos.
        <br />
        ¡Ella las verá todas con mucho cariño!
      </p>

      <a
        className="boton-mensaje"
        href="https://forms.gle/1L9bk8eshFM4eA3f8"
        target="_blank"
        rel="noopener noreferrer"
      >
        DEJAR MI MENSAJE
      </a>
    </section>
  );
}

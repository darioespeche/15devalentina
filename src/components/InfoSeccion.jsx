import React from "react";
import "./InfoSeccion.css";

export default function InfoSeccion({
  icono,
  titulo,
  subtitulo,
  descripcion,
  textoBoton,
  linkBoton,
}) {
  return (
    <section className="info-seccion">
      <div className="info-contenido">
        {icono && <div className="info-icono">{icono}</div>}
        <h2>{titulo}</h2>
        {subtitulo && <p className="info-subtitulo">{subtitulo}</p>}
        {descripcion && <p className="info-descripcion">{descripcion}</p>}
        {textoBoton && linkBoton && (
          <a
            className="info-boton"
            href={linkBoton}
            target="_blank"
            rel="noopener noreferrer"
          >
            {textoBoton}
          </a>
        )}
      </div>
    </section>
  );
}

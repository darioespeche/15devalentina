import React, { useState } from "react";
import "./Regalo.css";
import { FaGift } from "react-icons/fa";

export default function Regalo() {
  const [mostrarModal, setMostrarModal] = useState(false);

  const abrirModal = () => setMostrarModal(true);
  const cerrarModal = () => setMostrarModal(false);

  return (
    <>
      <section className="regalo-seccion">
        <FaGift className="regalo-icono" />
        <h2>REGALOS</h2>
        <p>El mejor regalo es tu presencia, pero si querés...</p>
        <button className="boton-regalo" onClick={abrirModal}>
          HACER UN REGALO
        </button>
      </section>

      {mostrarModal && (
        <div className="modal-overlay" onClick={cerrarModal}>
          <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
            <button className="modal-cerrar" onClick={cerrarModal}>
              ×
            </button>
            <h2>¡Gracias por tu cariño! 🎁</h2>
            <p>
              Si deseás hacer tu regalo personalmente,
              <br />
              el día del evento habrá un buzón para dejar obsequios.
            </p>
          </div>
        </div>
      )}

      <footer className="footer-final">
        ¡Gracias por acompañarme en este momento tan importante!
      </footer>
    </>
  );
}

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
        <p>
          El mejor regalo es que vengas,
          <br />
          pero si deseás regalarme algo, podés colaborar con mis sueños y
          anhelos ✨
        </p>
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
            <h3>Datos Bancarios</h3>
            <p>
              Nombre del Titular: <strong>Valentina Garrido</strong>
            </p>
            <p>
              CBU: <strong>12345623561</strong>
            </p>
            <p>
              Alias: <strong>valen.quince</strong>
            </p>
            <p>
              DNI: <strong>32200552</strong>
            </p>
            <p>Banco Galicia</p>
            <br />
            <h4>Buzón de regalos</h4>
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

import React, { useState, useEffect } from "react";
import "./Countdown.css";

function Countdown({ fecha }) {
  const [tiempoRestante, setTiempoRestante] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const ahora = new Date();
      const destino = new Date(fecha);
      const diferencia = destino - ahora;

      if (diferencia <= 0) {
        setTiempoRestante(null);
        clearInterval(interval);
        return;
      }

      const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
      const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
      const segundos = Math.floor((diferencia / 1000) % 60);
      setTiempoRestante({ dias, horas, minutos, segundos });
    }, 1000);

    return () => clearInterval(interval);
  }, [fecha]);

  return (
    <div className="countdown-container">
      <h2>Faltan:</h2>
      {tiempoRestante ? (
        <p>
          {tiempoRestante.dias} días, {tiempoRestante.horas}h{" "}
          {tiempoRestante.minutos}m {tiempoRestante.segundos}s
        </p>
      ) : (
        <p className="llego-msg">¡Es hoy! 💖</p>
      )}
    </div>
  );
}

export default Countdown;

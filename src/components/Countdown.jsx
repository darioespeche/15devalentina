import React, { useState, useEffect, useRef } from "react";
import "./Countdown.css";
import { FaRegClock } from "react-icons/fa";

function Countdown({ fecha }) {
  const [tiempoRestante, setTiempoRestante] = useState({});
  const [visible, setVisible] = useState(false);
  const countdownRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (countdownRef.current) {
      observer.observe(countdownRef.current);
    }

    return () => {
      if (countdownRef.current) observer.unobserve(countdownRef.current);
    };
  }, []);

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
    <section
      ref={countdownRef}
      className={`countdown-container ${visible ? "fade-in-up" : ""}`}
    >
      <h2 className="countdown-titulo">
        Cierro los ojos y todavía parece un sueño, pero llegó el momento de
        compartirlo con quienes más quiero. Me encantaría que seas parte de una
        noche mágica.
      </h2>
      <h2 className="countdown-titulo">Te espero para celebrar mis 15 años.</h2>

      <div className="countdown-tiempo">
        <h2 className="countdown-subtitulo">Faltan:</h2>
        <FaRegClock className="countdown-icon" />
        {tiempoRestante ? (
          <h3>
            {tiempoRestante.dias} días, {tiempoRestante.horas}h{" "}
            {tiempoRestante.minutos}m {tiempoRestante.segundos}s
          </h3>
        ) : (
          <p className="llego-msg">¡Es hoy! 💖</p>
        )}
      </div>
    </section>
  );
}

export default Countdown;

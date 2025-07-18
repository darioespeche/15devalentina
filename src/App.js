import "./App.css";
import HeroSection from "./components/HeroSection";
import MusicPlayer from "./components/MusicPlayer";
import Countdown from "./components/Countdown";
import Fiesta from "./components/Fiesta";
import Confirmacion from "./components/Confirmacion";
import Mensajes from "./components/Mensajes";
import InfoSeccion from "./components/InfoSeccion";
import { GiClothes, GiPartyPopper } from "react-icons/gi";
import { FaInstagram } from "react-icons/fa";
import fondoFiesta from "./assets/fiesta.jpg";
import Regalo from "./components/Regalo";

function App() {
  return (
    <>
      <HeroSection />
      <div className="linea-separadora"></div>
      <div className="linea-separadora"></div>
      <MusicPlayer />
      <Countdown fecha="2025-08-23T22:00:00" />
      <div className="linea-separadora"></div>
      <div className="linea-separadora"></div>
      <Fiesta />
      <div className="linea-separadora"></div>
      <div className="linea-separadora"></div>
      <Confirmacion />
      <div className="linea-separadora"></div>
      <div className="linea-separadora"></div>
      <Mensajes />
      <div className="linea-separadora"></div>
      <div className="linea-separadora"></div>
      <InfoSeccion
        fondo="var(--color-mostaza)"
        icono={<GiClothes />}
        titulo="DRESS CODE"
        subtitulo="Formal-Elegante"
        descripcion="No usar tonos en celeste o azul"
      />
      <div className="linea-separadora"></div>
      <div className="linea-separadora"></div>
      <InfoSeccion
        fondoImagen={fondoFiesta}
        icono={<FaInstagram />}
        titulo="@valefest.xv"
        descripcion="¡Preparate para esta gran fiesta! Seguime en mi cuenta de Instagram y etiquetame en tus fotos y videos."
        textoBoton="VER INSTAGRAM"
        linkBoton="https://www.instagram.com/valefest.xv/"
      />
      <div className="linea-separadora"></div>
      <div className="linea-separadora"></div>
      <Regalo />
    </>
  );
}
export default App;

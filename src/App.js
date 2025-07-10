import "./App.css";
import HeroSection from "./components/HeroSection";
import MusicPlayer from "./components/MusicPlayer";
import Countdown from "./components/Countdown";
import Gallery from "./components/Gallery";
import Fiesta from "./components/Fiesta";
import Confirmacion from "./components/Confirmacion";
import InfoSeccion from "./components/InfoSeccion";
import { GiClothes, GiPartyPopper } from "react-icons/gi";
import { FaInstagram } from "react-icons/fa";
import fondoFiesta from "./assets/foto1.jpg";
import Regalo from "./components/Regalo";

function App() {
  return (
    <>
      <HeroSection />
      <MusicPlayer />
      <Countdown fecha="2025-08-23T22:00:00" />
      <Fiesta />
      <Gallery />
      <Confirmacion />
      <InfoSeccion
        fondo="var(--color-mostaza)"
        icono={<GiClothes />}
        titulo="DRESS CODE"
        subtitulo="Elegante"
      />
      <InfoSeccion
        fondoImagen={fondoFiesta}
        icono={<FaInstagram />}
        titulo="@valentina"
        descripcion="¡Preparate para esta gran fiesta! Seguime en mi cuenta de Instagram y etiquetame en tus fotos y videos."
        textoBoton="VER INSTAGRAM"
        linkBoton="https://www.instagram.com/"
      />

      <Regalo />
    </>
  );
}
export default App;

// Componente principal: importa y ordena todas las secciones de la página
import Header from "./components/Header";
import Description from "./components/Description";
import Gallery from "./components/Gallery";
import Activities from "./components/Activities";
import Cotizador from "./components/Cotizador";
import ReservationForm from "./components/ReservationForm";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <main className="contenido">
        <Description />
        <Gallery />
        <Activities />
        <Cotizador />
        <ReservationForm />
        <Testimonials />
      </main>

      <Footer />
    </>
  );
}

export default App;

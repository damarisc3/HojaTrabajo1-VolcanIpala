import { useState } from "react";

// Nombres de visitantes y sus comentarios (mismo índice = misma persona)
const nombres = [
  "Ana Gómez",
  "Carlos López",
  "María Fernández",
  "Luis Ramírez",
  "Sofía Castillo",
  "Jorge Morales",
];

const comentarios = [
  "La vista de la laguna desde el borde del cráter vale cada paso de las 2 horas de caminata.",
  "Subimos a caballo y fue muy cómodo; arriba el agua de la laguna estaba fresquísima.",
  "Acampamos cerca del cráter y ver amanecer sobre la laguna fue lo mejor del viaje.",
  "Vimos venados y muchísimas aves en el sendero, ideal para quienes gustan de la fotografía.",
  "Todo bien organizado desde la salida de la capital; el municipio de Ipala es muy tranquilo.",
  "Aprovechamos para subir también al Cerro Monterrico, es corto y con muy buena vista.",
];

// Muestra un testimonio y permite cambiarlo por otro al azar
function Testimonials() {
  const [indice, setIndice] = useState(0);

  // Escoge un índice aleatorio que sea distinto al actual
  const verOtraOpinion = () => {
    let nuevoIndice;
    do {
      nuevoIndice = Math.floor(Math.random() * nombres.length);
    } while (nuevoIndice === indice);

    setIndice(nuevoIndice);
  };

  return (
    <section id="opiniones" className="tarjeta">
      <h2>Opiniones de nuestros visitantes</h2>

      <blockquote className="testimonio">
        <p>&ldquo;{comentarios[indice]}&rdquo;</p>
        <footer>&mdash; {nombres[indice]}</footer>
      </blockquote>

      <button type="button" onClick={verOtraOpinion}>
        Ver otra opinión
      </button>
    </section>
  );
}

export default Testimonials;

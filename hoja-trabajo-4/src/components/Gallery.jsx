import { useState } from "react";
import Modal from "./Modal";

// Datos de las imágenes de la galería (Wikimedia Commons)
const imagenes = [
  {
    id: 1,
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Laguna%20de%20Ipala%20en%20Guatemala.jpg",
    alt: "Vista panorámica de la Laguna de Ipala rodeada de vegetación",
    titulo: "Laguna de Ipala",
    descripcion:
      "Laguna de agua dulce formada en el cráter del volcán, de unos 1,000 metros de diámetro.",
  },
  {
    id: 2,
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Crater%20del%20Volc%C3%A1n%20de%20Ipala.jpg",
    alt: "Cráter del Volcán de Ipala visto desde el sendero",
    titulo: "Cráter del volcán",
    descripcion:
      "El cráter se alcanza tras unas 2 horas de caminata, o a caballo para quienes lo prefieran.",
  },
  {
    id: 3,
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Volcan%20y%20Laguna%20de%20Ipala.jpg",
    alt: "Volcán y laguna de Ipala en un mismo paisaje",
    titulo: "Volcán y laguna",
    descripcion:
      "Vista completa del volcán junto a su laguna, a 1,650 metros sobre el nivel del mar.",
  },
  {
    id: 4,
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Parque%20Ipala,%20Chiquimula,%20Guatemala.jpg",
    alt: "Área del parque en el municipio de Ipala, Chiquimula",
    titulo: "Parque Ipala",
    descripcion:
      "Área protegida administrada por el CONAP, punto de partida de la caminata.",
  },
];

// Galería de imágenes: al hacer clic en una miniatura se abre el Modal
function Gallery() {
  // Guarda la imagen seleccionada; null significa que el modal está cerrado
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

  return (
    <section id="galeria" className="tarjeta">
      <h2>Galería de imágenes</h2>
      <p className="subtexto">Haz clic sobre una imagen para verla en grande</p>

      <div className="galeria">
        {imagenes.map((imagen) => (
          <figure key={imagen.id} onClick={() => setImagenSeleccionada(imagen)}>
            <img src={imagen.src} alt={imagen.alt} loading="lazy" />
            <figcaption>{imagen.titulo}</figcaption>
          </figure>
        ))}
      </div>

      <Modal
        imagen={imagenSeleccionada}
        onClose={() => setImagenSeleccionada(null)}
      />
    </section>
  );
}

export default Gallery;

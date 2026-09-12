import { useState } from "react";

// Lista de actividades disponibles en la excursión
const actividades = [
  "Caminata de 2 horas hasta el cráter y la laguna",
  "Cabalgata alrededor del cráter (se puede rentar caballo)",
  "Observación de aves en el bosque que rodea la laguna",
  "Camping nocturno en zonas habilitadas cerca del cráter",
  "Fotografía de paisaje y de la fauna local (venados, aves)",
  "Visita al Cerro Monterrico, un cerro cercano de fácil ascenso",
  "Compra de artesanías y productos locales en el municipio de Ipala",
];

// Filtro de actividades: la lista se filtra en tiempo real según lo escrito
function Activities() {
  const [busqueda, setBusqueda] = useState("");

  // Se comparan ambos textos en minúsculas para que la búsqueda no distinga mayúsculas
  const actividadesFiltradas = actividades.filter((actividad) =>
    actividad.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <section id="actividades" className="tarjeta">
      <h2>Actividades disponibles</h2>

      <input
        type="text"
        className="buscador"
        placeholder="Buscar una actividad... (ej. aves, camping)"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      {actividadesFiltradas.length > 0 ? (
        <ul className="actividades">
          {actividadesFiltradas.map((actividad) => (
            <li key={actividad}>{actividad}</li>
          ))}
        </ul>
      ) : (
        <p className="sin-resultados">
          No se encontraron actividades con &quot;{busqueda}&quot;.
        </p>
      )}
    </section>
  );
}

export default Activities;

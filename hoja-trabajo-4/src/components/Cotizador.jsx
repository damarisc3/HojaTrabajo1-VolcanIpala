import { useState } from "react";

// Paquetes disponibles con su precio por persona
const paquetes = [
  { id: "basico", nombre: "Básico", precio: 150 },
  { id: "completo", nombre: "Completo", precio: 250 },
  { id: "premium", nombre: "Premium", precio: 350 },
];

// Servicios adicionales con su costo por persona
const servicios = [
  { id: "transporte", nombre: "Transporte", precio: 50 },
  { id: "alimentacion", nombre: "Alimentación", precio: 40 },
  { id: "equipo", nombre: "Alquiler de equipo", precio: 30 },
];

// Calculadora de cotización: el total se recalcula en cada cambio, sin botón
function Cotizador() {
  const [asistentes, setAsistentes] = useState(1);
  const [paqueteId, setPaqueteId] = useState("basico");
  // Guarda los ids de los servicios marcados, ej. ["transporte", "equipo"]
  const [serviciosSeleccionados, setServiciosSeleccionados] = useState([]);

  // Marca o desmarca un servicio en el arreglo de seleccionados
  const toggleServicio = (id) => {
    if (serviciosSeleccionados.includes(id)) {
      setServiciosSeleccionados(serviciosSeleccionados.filter((s) => s !== id));
    } else {
      setServiciosSeleccionados([...serviciosSeleccionados, id]);
    }
  };

  // ---- Cálculo del total (se ejecuta en cada render, por eso es "en tiempo real") ----
  const paquete = paquetes.find((p) => p.id === paqueteId);

  const extrasPorPersona = servicios
    .filter((s) => serviciosSeleccionados.includes(s.id))
    .reduce((suma, s) => suma + s.precio, 0);

  const cantidad = Number(asistentes) > 0 ? Number(asistentes) : 0;
  const precioPorPersona = paquete.precio + extrasPorPersona;
  const total = precioPorPersona * cantidad;

  return (
    <section id="cotizacion" className="tarjeta">
      <h2>Cotiza tu excursión</h2>
      <p className="subtexto">
        El precio se actualiza automáticamente al cambiar cualquier opción
      </p>

      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="asistentes">Número de asistentes:</label>
        <input
          type="number"
          id="asistentes"
          min="1"
          value={asistentes}
          onChange={(e) => setAsistentes(e.target.value)}
        />

        <label htmlFor="paquete">Tipo de paquete:</label>
        <select
          id="paquete"
          value={paqueteId}
          onChange={(e) => setPaqueteId(e.target.value)}
        >
          {paquetes.map((p) => (
            <option key={p.id} value={p.id}>
              {p.nombre} &mdash; Q{p.precio} por persona
            </option>
          ))}
        </select>

        <fieldset>
          <legend>Servicios adicionales</legend>
          {servicios.map((s) => (
            <label key={s.id} className="check">
              <input
                type="checkbox"
                checked={serviciosSeleccionados.includes(s.id)}
                onChange={() => toggleServicio(s.id)}
              />
              {s.nombre} (+Q{s.precio} por persona)
            </label>
          ))}
        </fieldset>
      </form>

      <div className="resumen">
        {cantidad === 0 ? (
          <p className="error">Ingresa un número válido de asistentes.</p>
        ) : (
          <>
            <p>
              Paquete {paquete.nombre}: Q{paquete.precio} + extras Q
              {extrasPorPersona} = <strong>Q{precioPorPersona}</strong> por
              persona
            </p>
            <p className="total">
              Total estimado: Q{total} para {cantidad} persona
              {cantidad > 1 ? "s" : ""}
            </p>
          </>
        )}
      </div>
    </section>
  );
}

export default Cotizador;

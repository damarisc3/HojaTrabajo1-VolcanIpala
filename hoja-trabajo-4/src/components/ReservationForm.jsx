import { useState } from "react";

// Formulario de reservación con validación y mensaje de confirmación
function ReservationForm() {
  // Valores de los campos
  const [nombre, setNombre] = useState("");
  const [personas, setPersonas] = useState("");
  // Errores por campo, ej. { nombre: "...", personas: "..." }
  const [errores, setErrores] = useState({});
  // Mensaje que se muestra cuando la solicitud es válida
  const [confirmacion, setConfirmacion] = useState("");

  // Revisa los campos y devuelve un objeto con los errores encontrados
  const validar = () => {
    const nuevosErrores = {};

    if (nombre.trim() === "") {
      nuevosErrores.nombre = "El nombre es obligatorio.";
    }

    if (personas === "") {
      nuevosErrores.personas = "Indica el número de personas.";
    } else if (Number(personas) <= 0) {
      nuevosErrores.personas = "El número de personas debe ser mayor a cero.";
    }

    return nuevosErrores;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // evita que la página se recargue

    const nuevosErrores = validar();
    setErrores(nuevosErrores);

    // Si hay al menos un error, no se envía
    if (Object.keys(nuevosErrores).length > 0) {
      setConfirmacion("");
      return;
    }

    setConfirmacion(
      `¡Gracias ${nombre.trim()}, tu solicitud para ${Number(personas)} persona${
        Number(personas) > 1 ? "s" : ""
      } ha sido registrada!`
    );

    // Se limpian los campos después de enviar
    setNombre("");
    setPersonas("");
  };

  return (
    <section id="reservacion" className="tarjeta">
      <h2>Reserva tu cupo</h2>

      {/* noValidate desactiva la validación del navegador para usar la nuestra */}
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="nombreReserva">Nombre completo:</label>
        <input
          type="text"
          id="nombreReserva"
          placeholder="Ej. Ana Gómez"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        {errores.nombre && <p className="error">{errores.nombre}</p>}

        <label htmlFor="personasReserva">Número de personas:</label>
        <input
          type="number"
          id="personasReserva"
          placeholder="Ej. 4"
          value={personas}
          onChange={(e) => setPersonas(e.target.value)}
        />
        {errores.personas && <p className="error">{errores.personas}</p>}

        <button type="submit">Enviar solicitud</button>
      </form>

      {confirmacion && <p className="confirmacion">{confirmacion}</p>}
    </section>
  );
}

export default ReservationForm;

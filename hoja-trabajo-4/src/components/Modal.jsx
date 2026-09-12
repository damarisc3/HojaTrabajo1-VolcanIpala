// Modal reutilizable para mostrar una imagen en grande.
// Recibe por props la imagen seleccionada y la función para cerrarlo.
function Modal({ imagen, onClose }) {
  // Si no hay imagen seleccionada, no se dibuja nada
  if (!imagen) {
    return null;
  }

  return (
    // Al hacer clic en el fondo oscuro se cierra el modal
    <div className="modal" onClick={onClose}>
      {/* stopPropagation evita que el clic dentro del contenido cierre el modal */}
      <div className="modal__contenido" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal__cerrar"
          onClick={onClose}
          aria-label="Cerrar"
        >
          &times;
        </button>
        <img src={imagen.src} alt={imagen.alt} />
        <h3>{imagen.titulo}</h3>
        <p>{imagen.descripcion}</p>
      </div>
    </div>
  );
}

export default Modal;

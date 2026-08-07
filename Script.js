// ===== 1. Galería de imágenes con modal =====
const imagenesGaleria = document.querySelectorAll(".galeria img");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalTitulo = document.getElementById("modalTitulo");
const modalDescripcion = document.getElementById("modalDescripcion");
const cerrarModal = document.getElementById("cerrarModal");

imagenesGaleria.forEach(function (img) {
  img.addEventListener("click", function () {
    modalImg.src = img.src;
    modalTitulo.textContent = img.dataset.titulo;
    modalDescripcion.textContent = img.dataset.descripcion;
    modal.classList.remove("oculto");
  });
});

cerrarModal.addEventListener("click", function () {
  modal.classList.add("oculto");
});

// cerrar el modal si el usuario hace clic fuera de la imagen
modal.addEventListener("click", function (evento) {
  if (evento.target === modal) {
    modal.classList.add("oculto");
  }
});

// ===== 2. Calculadora de cotización =====
const btnCalcular = document.getElementById("btnCalcular");
const resultadoCotizacion = document.getElementById("resultadoCotizacion");

btnCalcular.addEventListener("click", function () {
  const asistentes = Number(document.getElementById("asistentes").value);
  const precioPaquete = Number(document.getElementById("paquete").value);

  const checkboxes = document.querySelectorAll(".servicio:checked");
  let extrasPorPersona = 0;
  checkboxes.forEach(function (checkbox) {
    extrasPorPersona += Number(checkbox.value);
  });

  if (asistentes <= 0 || isNaN(asistentes)) {
    resultadoCotizacion.textContent = "Ingresa un número válido de asistentes.";
    return;
  }

  const total = (precioPaquete + extrasPorPersona) * asistentes;
  resultadoCotizacion.textContent =
    "Total estimado: Q" + total + " para " + asistentes + " persona(s).";
});

// ===== 3. Buscador de actividades =====
const buscarActividad = document.getElementById("buscarActividad");
const listaActividades = document.querySelectorAll("#listaActividades li");
const sinResultados = document.getElementById("sinResultados");

buscarActividad.addEventListener("keyup", function () {
  const texto = buscarActividad.value.toLowerCase();
  let coincidencias = 0;

  listaActividades.forEach(function (item) {
    const contenido = item.textContent.toLowerCase();
    if (contenido.includes(texto)) {
      item.classList.remove("oculto");
      coincidencias++;
    } else {
      item.classList.add("oculto");
    }
  });

  if (coincidencias === 0) {
    sinResultados.classList.remove("oculto");
  } else {
    sinResultados.classList.add("oculto");
  }
});

// ===== 4. Formulario de reservación con validación =====
const formReserva = document.getElementById("formReserva");
const mensajeReserva = document.getElementById("mensajeReserva");

formReserva.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nombre = document.getElementById("nombreReserva").value.trim();
  const correo = document.getElementById("correoReserva").value.trim();
  const personas = document.getElementById("personasReserva").value.trim();

  if (nombre === "" || correo === "" || personas === "") {
    mensajeReserva.textContent = "Por favor completa todos los campos antes de enviar.";
    mensajeReserva.classList.add("error");
    return;
  }

  mensajeReserva.classList.remove("error");
  mensajeReserva.textContent =
    "¡Gracias " + nombre + ", tu solicitud para " + personas + " persona(s) ha sido registrada!";

  formReserva.reset();
});

// ===== 5. Testimonios aleatorios =====
const nombresVisitantes = [
  "Ana Gómez",
  "Carlos López",
  "María Fernández",
  "Luis Ramírez",
  "Sofía Castillo",
];

const comentariosVisitantes = [
  "Una experiencia increíble, la vista de la laguna vale cada paso de la caminata.",
  "El itinerario estuvo muy bien organizado, todo salió a tiempo.",
  "Totalmente recomendado, el guía conocía muy bien la zona.",
  "El paisaje es hermoso, ideal para desconectarse un rato del ruido de la ciudad.",
  "Volvería sin pensarlo, la pasamos increíble en familia.",
];

const testimonioTexto = document.getElementById("testimonioTexto");
const testimonioAutor = document.getElementById("testimonioAutor");
const btnOtraOpinion = document.getElementById("btnOtraOpinion");

function mostrarTestimonioAleatorio() {
  const indice = Math.floor(Math.random() * nombresVisitantes.length);
  testimonioTexto.textContent = '"' + comentariosVisitantes[indice] + '"';
  testimonioAutor.textContent = "- " + nombresVisitantes[indice];
}

btnOtraOpinion.addEventListener("click", mostrarTestimonioAleatorio);

// mostrar un testimonio apenas carga la página
mostrarTestimonioAleatorio();
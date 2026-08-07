## Hoja de Trabajo 3 — Interactividad con JavaScript

Partiendo del diseño de la Hoja de Trabajo 2, se integró JavaScript mediante un archivo externo (`script.js`) para agregar interactividad, manipulación del DOM y respuesta a eventos del usuario:

- **Galería interactiva con modal:** al hacer clic sobre cualquier imagen de la galería (`querySelectorAll` + `addEventListener("click")`) se abre un visor en grande con su título y descripción, tomados de atributos `data-*` de cada imagen. Se cierra con el botón "×" o haciendo clic fuera de la imagen, alternando la visibilidad con `classList.add/remove("oculto")`.
- **Cotizador de la excursión:** formulario donde el visitante indica número de asistentes (`<input type="number">`), tipo de paquete (`<select>`) y servicios adicionales (`<input type="checkbox">`). Al presionar "Calcular Total" (`addEventListener("click")`), JavaScript lee los valores con `getElementById`, calcula el total y lo escribe en pantalla con `textContent`, sin recargar la página.
- **Buscador de actividades en tiempo real:** un `<input type="text">` con evento `addEventListener("keyup")` recorre la lista de actividades (`querySelectorAll`) y compara el texto escrito contra el contenido de cada `<li>` (`textContent.toLowerCase().includes()`), mostrando u ocultando cada una con `classList`.
- **Formulario de reservación con validación:** al enviar el formulario (`addEventListener("submit")` + `preventDefault()` para evitar la recarga), se valida con condicionales que nombre, correo y número de personas no estén vacíos. Si falta algo, se marca un mensaje de error con `classList.add("error")`; si todo está completo, se muestra un mensaje de confirmación personalizado con `textContent` y se limpia el formulario con `.reset()`.
- **Opiniones de visitantes:** dos arreglos de JavaScript (`nombresVisitantes` y `comentariosVisitantes`) de los que se elige un índice aleatorio con `Math.random()` y `Math.floor()`. Un botón "Ver otra opinión" (`addEventListener("click")`) actualiza el testimonio mostrado en pantalla.

## Sitio publicado en Netlify

https://volcan-ipala-ht3.netlify.app/

## Estudiante

Damaris Luz Marié Cabrera Carino
Carné: 9490-23-3042

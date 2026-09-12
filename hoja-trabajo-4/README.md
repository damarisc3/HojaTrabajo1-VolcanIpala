# Hoja de Trabajo 4 — Volcán de Ipala en React

Página informativa de una excursión turística al **Volcán de Ipala** (Chiquimula / Jutiapa, Guatemala), migrada a **React + Vite** y modularizada en componentes. Es la continuación de las Hojas de Trabajo 1 (HTML), 2 (CSS) y 3 (JavaScript vanilla).

**Sitio publicado:** [PENDIENTE - agregar link de Netlify]

## Datos del estudiante

- **Nombre:** Damaris Luz Marié Cabrera Carino
- **Carné:** 9490-23-3042
- **Curso:** Desarrollo Web — 8vo semestre
- **Universidad:** Universidad Mariano Gálvez de Guatemala

## Cómo ejecutar el proyecto

```bash
npm install       # instala las dependencias
npm run dev       # servidor de desarrollo (http://localhost:5173)
npm run build     # genera la versión de producción en /dist
npm run lint      # revisa el código con ESLint
```

## Estructura

```
hoja-trabajo-4/
├── index.html
├── src/
│   ├── main.jsx            # punto de entrada, monta <App /> en #root
│   ├── App.jsx             # importa y ordena todos los componentes
│   ├── App.css             # estilos de las secciones (organizado por componente)
│   ├── index.css           # estilos globales (reset, fuente, fondo)
│   └── components/
│       ├── Header.jsx
│       ├── Description.jsx
│       ├── Gallery.jsx
│       ├── Modal.jsx
│       ├── Activities.jsx
│       ├── Cotizador.jsx
│       ├── ReservationForm.jsx
│       ├── Testimonials.jsx
│       └── Footer.jsx
└── README.md
```

## Componentes

| Componente | Descripción |
|---|---|
| `Header.jsx` | Encabezado (hero) con el título y subtítulo de la página. |
| `Description.jsx` | Descripción del volcán: ubicación, altitud, laguna del cráter y datos de la caminata. |
| `Gallery.jsx` | Galería con 4 imágenes de Wikimedia Commons en cuadrícula. Usa `useState` para guardar la imagen seleccionada; al hacer clic en una miniatura abre el `Modal`. |
| `Modal.jsx` | Componente reutilizable que muestra la imagen en grande con título y descripción. Se cierra con el botón `×` o haciendo clic fuera del contenido (recibe `imagen` y `onClose` por props). |
| `Activities.jsx` | Buscador sobre una lista de 7 actividades. Guarda el término con `useState` y filtra la lista con `.filter()` comparando en minúsculas; si no hay coincidencias muestra un mensaje. |
| `Cotizador.jsx` | Calculadora de cotización: número de asistentes, `<select>` con 3 paquetes (Básico Q150, Completo Q250, Premium Q350) y checkboxes de servicios adicionales (transporte +Q50, alimentación +Q40, equipo +Q30). El total se recalcula en cada render, sin botón "calcular". |
| `ReservationForm.jsx` | Formulario con nombre y número de personas. Valida con `onSubmit` + `preventDefault` (nombre vacío, personas vacío/cero/negativo) mostrando errores por campo, y al enviar correctamente muestra un mensaje de confirmación personalizado. |
| `Testimonials.jsx` | Muestra un testimonio (nombre + comentario) tomado de dos arreglos internos. El botón "Ver otra opinión" elige con `Math.random` un índice distinto al actual y actualiza el estado. |
| `Footer.jsx` | Pie de página con el nombre del estudiante y carné. |

## Tecnologías

- React 19 (hooks: `useState`)
- Vite 8
- CSS puro (sin frameworks de UI)
- ESLint (configuración por defecto de Vite)

## Paleta de colores

| Uso | Color |
|---|---|
| Verde oscuro (encabezado, pie, botones) | `#1f3d2b` |
| Verde medio (hover, subtextos) | `#3a6b4a` |
| Dorado (acentos, bordes) | `#c9a24b` |
| Verde claro (fondo) | `#e8f2e9` |

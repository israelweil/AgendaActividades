# Agenda de actividades

Aplicación sencilla para anotar actividades por fecha y categoría. Los datos quedan guardados en el navegador con `localStorage`.

## Archivos

- `index.html`: estructura semántica.
- `styles/styles.scss`: estilos fuente organizados con variables SCSS.
- `styles/styles.css`: CSS que carga directamente el navegador.
- `javascript/app.js`: validación, eventos, renderizado y almacenamiento.
- `imgs/logo.jpg`: logo proporcionado.

Abre `index.html` en un navegador para usar la agenda. No requiere instalación ni conexión a internet. Si editas el SCSS, compílalo a `styles.css` para actualizar los estilos del navegador.

## Funcionalidades

- Alta de actividades con nombre, fecha y categoría; eliminación individual.
- Validación de campos vacíos al escribir, cambiar controles y enviar el formulario.
- Vista previa que se actualiza automáticamente al escribir o seleccionar fecha/categoría.
- Mensajes de estado accesibles mediante `role="status"` y `aria-live`.
- Lista y contador actualizados al momento, y persistencia tras cerrar o recargar la página.
- Botón para limpiar campos.

## Conceptos investigados incorporados

1. **Validación:** lectura de `value`, limpieza con `trim()` y marcas de error con `classList`.
2. **Eventos y DOM:** `submit`, `click`, `input` y `change`; los elementos de la lista se crean con `createElement` y el texto se asigna con `textContent`.
3. **Persistencia:** `localStorage.setItem()` y `getItem()` junto con `JSON.stringify()` y `JSON.parse()`.

## Fuentes de consulta

- Material de la actividad: *T3 Práctica 3: Desarrollo de una aplicación web interactiva con JavaScript* y *Especificaciones Técnicas y Prompt de Desarrollo: Agenda de Actividades*.
- MDN Web Docs: [Web Storage API](https://developer.mozilla.org/es/docs/Web/API/Web_Storage_API), [addEventListener](https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener), [classList](https://developer.mozilla.org/es/docs/Web/API/Element/classList).

## Evidencias

La actividad solicita capturas de la interfaz y de su funcionamiento. Agrégalas aquí después de tomar capturas en el navegador, junto con una breve descripción de la prueba realizada.

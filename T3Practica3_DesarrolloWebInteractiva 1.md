# T3 Práctica 3: Desarrollo de una aplicación web interactiva con JavaScript 

**Objetivo:** Aplicar los fundamentos de JavaScript para desarrollar una página web interactiva, utilizando variables, operadores, funciones, eventos y manipulación básica de elementos HTML mediante el DOM. 

## **Descripción** 

Desarrolla una aplicación web que permita realizar una actividad sencilla mediante una interfaz gráfica. La aplicación deberá recibir información del usuario, procesarla con JavaScript y mostrar los resultados dinámicamente en la página, sin necesidad de recargarla. 

Puedes elegir una de las siguientes propuestas: 

- **Calculadora de compras:** registrar productos, cantidades y precios, y calcular el importe total. 

- **Cotizador de servicios:** seleccionar un servicio, indicar características y calcular un costo estimado. 

- **Control de gastos personales:** registrar conceptos e importes y calcular el total de gastos. 

- **Generador de presupuestos:** capturar productos o servicios y generar un resumen de costos. 

- **Agenda de actividades:** registrar actividades y mostrar sus datos en una lista. 

## **Parte 1. Desarrollo de la aplicación** 

La aplicación deberá contar con una interfaz construida con HTML y CSS, y utilizar JavaScript para implementar su funcionalidad. 

## **Requisitos funcionales:** 

1. Presentar un formulario o conjunto de campos para recibir información del usuario. 

2. Utilizar variables para almacenar los valores capturados. 

3. Realizar operaciones mediante operadores aritméticos o de comparación, según corresponda. 

4. Organizar las operaciones principales mediante funciones. 

5. Incorporar botones u otros elementos que permitan ejecutar acciones. 

6. Utilizar eventos para detectar las acciones del usuario. 

7. Mostrar los resultados directamente en la página mediante la manipulación de elementos HTML. 

8. Permitir limpiar los campos o restablecer la aplicación. 

**Ejemplo:** Si desarrollas una calculadora de compras, el usuario deberá poder capturar el nombre de un producto, su precio y la cantidad que desea comprar. Al pulsar el botón correspondiente, la aplicación calculará el importe y mostrará el resultado en la página. 

## **Parte 2. Investigación e incorporación de nuevas funcionalidades** 

Investiga cómo implementar las siguientes características y agrégalas a tu aplicación. No basta con describirlas: deberás implementarlas y comprobar su funcionamiento. 

1. **Validación de campos:** evitar que el usuario deje campos vacíos o capture valores incorrectos. Las validaciones deberá realizarse mediante JavaScript, no sólo las del navegador en HTML. 

2. **Eventos adicionales:** utilizar eventos como input, change o submit, además de click. 

3. **Manipulación de estilos:** cambiar colores, clases CSS o apariencia de los elementos desde JavaScript. 

4. **Mostrar y ocultar elementos:** controlar la visibilidad de mensajes, paneles o secciones. 

5. **Confirmaciones al usuario:** mostrar mensajes de éxito, advertencia o confirmación mediante elementos HTML. 

6. **Actualización automática:** actualizar un resultado conforme el usuario modifica los valores de un campo, sin necesidad de pulsar un botón. 

7. **Almacenamiento local:** investigar cómo utilizar localStorage para conservar información aunque se cierre o actualice la página. 

## **Ejemplo de implementación: cambiar la apariencia de un elemento** 

En HTML: 

```
<pid="mensaje">Bienvenido a la aplicación</p>
<buttonid="btnCambiar">Cambiar apariencia</button>
```

En CSS: 

```
.destacado {
color: white;
background-color: #2563eb;
padding: 10px;
border-radius: 8px;
 }
```

En JavaScript: 

```
constmensaje=document.querySelector("#mensaje");
constboton=document.querySelector("#btnCambiar");
boton.addEventListener("click", function () {
mensaje.classList.toggle("destacado"); });
```

Donde: 

- classList permite manipular las clases CSS de un elemento. 

- toggle() agrega una clase si no existe y la elimina si ya está aplicada. 

- Al pulsar el botón, el mensaje cambia de apariencia. 

Investiga las características que elijas, consulta su documentación y adapta los ejemplos a tu propia aplicación. 

## **Parte 3. Pruebas y documentación** 

Realiza pruebas para comprobar que la aplicación funciona correctamente. 

Incluye en un documento breve: 

- Nombre y descripción de la aplicación. 

- Funcionalidades implementadas. 

- Capturas de pantalla de la interfaz y de su funcionamiento. 

- Descripción de las tres funcionalidades investigadas e incorporadas. 

- Fuentes de consulta utilizadas. 

## **Entregables** 

1. Carpeta del proyecto con los archivos HTML, CSS y JavaScript. 

2. Documento con la descripción, evidencias y fuentes de consulta. 

3. Aplicación funcional que pueda ejecutarse en un navegador web. 

## **Consideraciones** 

- No utilizar frameworks ni bibliotecas externas de JavaScript. 

- El código JavaScript debe estar en un archivo independiente (.js). 

- Utilizar nombres descriptivos para variables y funciones. 

- Mantener separadas la estructura HTML, la presentación CSS y la funcionalidad JavaScript. 

- La aplicación debe tener una interfaz clara, organizada y fácil de utilizar. 

- Se evaluará tanto el funcionamiento como la aplicación correcta de los conceptos estudiados. 

## **Orientación para investigación de características:** 

|**Funcionalidad**|**Concepto o métodoque deben investigar**|
|---|---|
|**Validar campos**|value, trim()|
|**Eventos adicionales**|input, change, submit|
|**Cambiar estilos**|classList.add(), remove(), toggle()|
|**Mostrary ocultar**|style.displayo clases CSS|
|**Mostrar mensajes**|textContent, innerHTML|



**Actualización automática** Evento input **<mark>Almacenar información</mark>** <mark>localStorage.setItem()</mark> <u><mark>y getItem()</mark></u> 


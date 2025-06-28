# MiniEntrega3.JS.Storage
📄 Tercera Pre-entrega – JavaScript y Storage

---

## 👨‍👩‍👧‍👦 Integrantes del equipo - Grupo 10

| Nombre y Apellido     | Correo Electrónico        |
|------------------------|----------------------------|
| [Julieta Lafuente] | [[julietarlafuente@gmail.com]] |
| [Sofía Sanchez Ponce] | [sofiaspcolo@gmail.com] |
| [María Verónica Rebolleda] | [rebolledaver@gmail.com] |


# 💼 Mega Evento de Emprendedores 2025 - Registro de Participantes

![Captura de pantalla 2025-06-27 133655](https://github.com/user-attachments/assets/14d9d655-0af7-426f-83ec-f9fc2f4d7dc0)


## 🚀 Descripción

Este proyecto web fue desarrollado como entrega grupal para el curso de desarrollo Frontend. Tiene como objetivo registrar a los emprendedores participantes del **Mega Evento de Emprendedores 2025**, simulando una base de datos con funcionalidades completas mediante JavaScript, HTML y CSS.

🧩 En esta app podés:
- Agregar nuevos participantes desde un formulario intuitivo
- Registrar datos del emprendimiento (nombre y rubro)
- Guardar preferencias en el navegador con **localStorage**
- Mostrar en pantalla los participantes registrados con diseño responsivo

---

## 📋 Requisitos del proyecto

- Crear un array de usuarios directamente en `app.js`
- Permitir agregar usuarios nuevos mediante formulario
- Guardar datos del evento elegido en el navegador (localStorage)
- Mostrar los usuarios en pantalla
- Estilo visual atractivo, accesible y responsive

---

## 🚀 Funcionalidades implementadas

✔️ **1. Crear un array inicial de usuarios**

Se inicializa en `app.js` con dos objetos de ejemplo.

✔️ **2. Mostrar usuarios en pantalla**

- Se usa `createElement()` para insertar dinámicamente cada usuario en un `<ul>`.
- Al cargar la página y al agregar nuevos usuarios, se actualiza la lista visible.

✔️ **3. Agregar nuevos usuarios desde formulario**

- Formulario con inputs: `nombre`, `edad`, `email`, `nombre del emprendimiento`, `rubro`.
- Al hacer clic en **"Agregar participante"**:
  - Se crea un nuevo objeto con los datos ingresados.
  - Se agrega automáticamente al array `usuarios`.
  - Se actualiza la lista en pantalla sin necesidad de recargar.

✔️ **4. Guardar información en LocalStorage**

- Se solicita al usuario que elija un día para asistir al evento.
- Al seleccionar y confirmar, se guarda con `localStorage.setItem()`.
- Al volver a cargar la página, se lee con `getItem()` y se muestra un saludo personalizado con el día elegido.

---

## 🛠️ Tecnologías utilizadas

- HTML5
- CSS3 (diseño responsive y atractivo)
- JavaScript (DOM, eventos, arrays, localStorage)

---

## 📂 Estructura del proyecto

📁 Proyecto Storage/

  ├── index.html

  ├── style.css

  ├── app.js

  └── Grupo_10.PNG (logo del equipo)

---

## ❤️ Proyecto realizado con dedicación y colaboración por el Grupo 10

> Si te gustó este proyecto, no olvides dejar una ⭐ en el repo.

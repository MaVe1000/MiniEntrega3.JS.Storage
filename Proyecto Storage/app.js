let usuarios = [
  {
    id: 1,
    nombre: "Juan",
    edad: 25,
    email: "juan@mail.com",
    nombre_Emprendimiento: "J.L Estudio",
    rubro: "Tecnología",
  },
  {
    id: 2,
    nombre: "Ana",
    edad: 30,
    email: "ana@mail.com",
    nombre_Emprendimiento: "A.P. Pyme",
    rubro: "comercio",
  },
];

// 2️⃣ Mostrar saludo personalizado si hay dato en localStorage
const saludoInicial = localStorage.getItem("eventoFavorito"); // Obtenemos el día del evento guardado
if (saludoInicial) {
  document.getElementById("saludo").innerText = `🎉 ¡Bienvenid@ al M.E.E.!
   Tu día confirmado de asistencia es para el ${saludoInicial}.`;
} else {
  document.getElementById("saludo").innerText = `🎉 ¡Bienvenid@ al M.E.E.!
   Por favor, seleccioná un día para confirmar tu asistencia.`; // Mensaje inicial si no hay día guardado
}
mostrarUsuarios();

// 1️⃣ Guardar evento favorito en localStorage
function guardarEventoFavorito() {
  const diaSeleccionado = document.getElementById("diaEvento").value;
  if (diaSeleccionado) {
    localStorage.setItem("eventoFavorito", diaSeleccionado); //se guardara y mostrará en el localStorage
    alert(
      `¡Gracias! Registraste tu asistencia para el día: ${diaSeleccionado}`
    );
    console.log(`Evento favorito guardado: ${diaSeleccionado} en localStorage`);
    document.getElementById("diaEvento").value = ""; // Limpiar el campo
    document.getElementById(
      "saludo"
    ).innerText = `🎉 ¡Bienvenid@ al M.E.E! Tu día confirmado de asistencia es para el ${diaSeleccionado}.`;
  } else {
    alert("Por favor seleccioná un día del evento.");
  }
}

// Mostrar usuarios en la lista
function mostrarUsuarios() {
  const lista = document.getElementById("listaUsuarios");
  lista.innerHTML = "";
  usuarios.forEach((usuario) => {
    const li = document.createElement("li");
    li.innerText = `${usuario.nombre} _ Emprendimiento: ${usuario.nombre_Emprendimiento}. _Rubro: ${usuario.rubro}.`;
    lista.appendChild(li);
  });
}

//Validar y obtener rubro de emprendimiento seleccionado
function validarRubro() {
  const rubro = document.getElementById("rubro").value;
  if (rubro === "ninguno") {
    alert("Por favor, seleccioná un rubro de emprendimiento.");
  }
  return;
}

// Agregar nuevo usuario desde el formulario
document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const edad = parseInt(document.getElementById("edad").value);
  const email = document.getElementById("email").value;
  const nombre_Emprendimiento = document.getElementById(
    "nombre_Emprendimiento"
  ).value;
  const rubro =
    document.querySelector("input[name='rubro']:checked")?.value ||
    validarRubro();
  const nuevoUsuario = {
    id: usuarios.length + 1,
    nombre,
    edad,
    email,
    nombre_Emprendimiento,
    rubro,
  };
  usuarios.push(nuevoUsuario);
  mostrarUsuarios();

  // Limpiar form
  document.getElementById("formulario").reset();
});

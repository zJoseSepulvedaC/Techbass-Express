document.addEventListener("DOMContentLoaded", function () {
  const perfilForm = document.getElementById("perfilForm");
  const alertContainer = document.getElementById("alertContainer");

  const nombreInput = document.getElementById("nombre");
  const emailInput = document.getElementById("email");
  const fechaNacimientoInput = document.getElementById("fechaNacimiento");

  // Cargar datos guardados previamente (si existen)
  const datosUsuario = JSON.parse(localStorage.getItem("datosUsuario"));
  if (datosUsuario) {
    nombreInput.value = datosUsuario.nombre || "";
    emailInput.value = datosUsuario.email || "";
    fechaNacimientoInput.value = datosUsuario.fechaNacimiento || "";
  }

  perfilForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alertContainer.innerHTML = "";

    const nombre = nombreInput.value.trim();
    const email = emailInput.value.trim();
    const fechaNacimiento = fechaNacimientoInput.value;

    if (!nombre || !email || !fechaNacimiento) {
      mostrarAlerta("Todos los campos son obligatorios.");
      return;
    }

    // Guardar los cambios simuladamente
    const nuevosDatos = {
      nombre,
      email,
      fechaNacimiento
    };
    localStorage.setItem("datosUsuario", JSON.stringify(nuevosDatos));

    mostrarExito("Los cambios han sido guardados exitosamente.");
  });

  function mostrarAlerta(mensaje) {
    alertContainer.innerHTML = `<div class="alert alert-danger">${mensaje}</div>`;
  }

  function mostrarExito(mensaje) {
    alertContainer.innerHTML = `<div class="alert alert-success">${mensaje}</div>`;
  }
});

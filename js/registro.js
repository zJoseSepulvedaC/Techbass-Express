document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registroForm");
  const alertContainer = document.getElementById("alertContainer");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alertContainer.innerHTML = ""; // Limpia mensajes anteriores

    const nombre = document.getElementById("nombre").value.trim();
    const usuario = document.getElementById("usuario").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;

    // Validaciones
    if (!nombre || !usuario || !email || !password || !confirmPassword || !fechaNacimiento) {
      mostrarAlerta("Todos los campos obligatorios deben ser completados.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      mostrarAlerta("Por favor, ingrese un correo electrónico válido.");
      return;
    }

    if (password !== confirmPassword) {
      mostrarAlerta("Las contraseñas no coinciden.");
      return;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,18}$/;
    if (!passwordRegex.test(password)) {
      mostrarAlerta("La contraseña debe tener entre 6 y 18 caracteres, al menos una letra mayúscula y un número.");
      return;
    }

    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
      edad--;
    }

    if (edad < 13) {
      mostrarAlerta("Debes tener al menos 13 años para registrarte.");
      return;
    }

    // Si todo está bien:
    mostrarAlerta("Formulario enviado correctamente.", "success");
    form.reset();
  });

  function mostrarAlerta(mensaje, tipo = "danger") {
    alertContainer.innerHTML = `
      <div class="alert alert-${tipo} alert-dismissible fade show" role="alert">
        ${mensaje}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Cerrar"></button>
      </div>
    `;
  }
});

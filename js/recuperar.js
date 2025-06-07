document.addEventListener("DOMContentLoaded", function () {
  const recoveryForm = document.getElementById("recoveryForm");
  const alertContainer = document.getElementById("alertContainer");

  recoveryForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alertContainer.innerHTML = "";

    const email = document.getElementById("email").value.trim();

    if (!email) {
      mostrarAlerta("Por favor, ingresa tu correo electrónico.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      mostrarAlerta("Correo electrónico inválido.");
      return;
    }

    // Simulación de envío
    mostrarExito("Si el correo está registrado, recibirás instrucciones para restablecer tu contraseña.");
    recoveryForm.reset();
  });

  function mostrarAlerta(mensaje) {
    alertContainer.innerHTML = `<div class="alert alert-danger">${mensaje}</div>`;
  }

  function mostrarExito(mensaje) {
    alertContainer.innerHTML = `<div class="alert alert-success">${mensaje}</div>`;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const alertContainer = document.getElementById("alertContainer");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alertContainer.innerHTML = "";

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
      mostrarAlerta("Todos los campos son obligatorios.");
      return;
    }

    // Simulación de login
    if (email === "admin@techbat.com" && password === "Admin123!") {
      localStorage.setItem("rol", "admin");
      window.location.href = "admin.html";
    } else if (email === "cliente@techbat.com" && password === "Cliente123!") {
      localStorage.setItem("rol", "cliente");
      window.location.href = "index.html";
    } else {
      mostrarAlerta("Credenciales incorrectas.");
    }
  });

  function mostrarAlerta(mensaje) {
    alertContainer.innerHTML = `<div class="alert alert-danger">${mensaje}</div>`;
  }
});

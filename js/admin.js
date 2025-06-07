document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formJuego");
  const tabla = document.querySelector("#tablaJuegos tbody");
  const alertContainer = document.getElementById("alertContainer");

  let juegos = JSON.parse(localStorage.getItem("juegos")) || [];

  renderizarTabla();

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alertContainer.innerHTML = "";

    const nombre = document.getElementById("nombreJuego").value.trim();
    const categoria = document.getElementById("categoria").value;
    const imagen = document.getElementById("imagen").value.trim();
    const precio = document.getElementById("precio").value.trim();

    if (!nombre || !categoria || !imagen || !precio) {
      mostrarAlerta("Todos los campos son obligatorios.");
      return;
    }

    const juego = { nombre, categoria, imagen, precio };
    juegos.push(juego);
    localStorage.setItem("juegos", JSON.stringify(juegos));

    form.reset();
    mostrarExito("Juego agregado correctamente.");
    renderizarTabla();
  });

function renderizarTabla() {
  tabla.innerHTML = "";

  if (juegos.length === 0) {
    tabla.innerHTML = '<tr><td colspan="5" class="text-center">No hay juegos registrados.</td></tr>';
    return;
  }

  juegos.forEach((juego, index) => {
    const fila = document.createElement("tr");

    fila.innerHTML = `
      <td>${juego.nombre}</td>
      <td>${juego.categoria}</td>
      <td><img src="${juego.imagen}" alt="${juego.nombre}" style="max-height: 80px; object-fit: contain;"></td>
      <td>$${juego.precio && !isNaN(juego.precio) ? parseInt(juego.precio).toLocaleString() : 'No especificado'}</td>
      <td><button class="btn btn-danger btn-sm" onclick="eliminarJuego(${index})">Eliminar</button></td>
    `;

    tabla.appendChild(fila);
  });
}


  window.eliminarJuego = function (index) {
    if (confirm("¿Seguro que deseas eliminar este juego?")) {
      juegos.splice(index, 1);
      localStorage.setItem("juegos", JSON.stringify(juegos));
      renderizarTabla();
    }
  };

  function mostrarAlerta(mensaje) {
    alertContainer.innerHTML = `<div class="alert alert-danger">${mensaje}</div>`;
  }

  function mostrarExito(mensaje) {
    alertContainer.innerHTML = `<div class="alert alert-success">${mensaje}</div>`;
  }
});

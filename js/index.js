document.addEventListener("DOMContentLoaded", function () {
  const contenedor = document.getElementById("catalogo");

  if (!contenedor) {
    console.error("No se encontró el contenedor #catalogo en el HTML.");
    return;
  }

  const juegos = JSON.parse(localStorage.getItem("juegos")) || [];
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  actualizarContadorCarrito(); // Ejecutar al inicio

  if (juegos.length === 0) {
    contenedor.innerHTML = "<p class='text-center'>No hay juegos disponibles aún.</p>";
    return;
  }

  juegos.forEach(juego => {
    const card = document.createElement("div");
    card.className = "col-12 col-sm-6 col-md-3";

    const yaEnCarrito = carrito.some(item => item.nombre === juego.nombre);

    card.innerHTML = `
      <div class="text-center border rounded p-3 shadow-sm" style="min-height: 300px;">
        <img src="${juego.imagen}" alt="${juego.nombre}" class="img-fluid mb-2" style="max-height: 150px; object-fit: contain;">
        <h5>${juego.nombre}</h5>
        <p>Categoría: ${juego.categoria}</p>
        <button class="btn btn-outline-primary mt-2" ${yaEnCarrito ? "disabled" : ""} data-nombre="${juego.nombre}">
          ${yaEnCarrito ? "Agregado" : "Agregar al carrito"}
        </button>
      </div>
    `;

    contenedor.appendChild(card);
  });

  // Un solo bloque para manejar el evento de todos los botones
  document.querySelectorAll('button[data-nombre]').forEach(btn => {
    btn.addEventListener("click", function () {
      const nombre = this.getAttribute("data-nombre");
      const juegosActualizados = JSON.parse(localStorage.getItem("juegos")) || [];
      const juegoSeleccionado = juegosActualizados.find(j => j.nombre === nombre);

      if (!juegoSeleccionado) return;

      const carritoActual = JSON.parse(localStorage.getItem("carrito")) || [];

      // Prevenir duplicados
      const yaExiste = carritoActual.some(j => j.nombre === nombre);
      if (!yaExiste) {
        carritoActual.push(juegoSeleccionado);
        localStorage.setItem("carrito", JSON.stringify(carritoActual));
      }

      this.innerText = "Agregado";
      this.disabled = true;

      actualizarContadorCarrito();
    });
  });
});

function actualizarContadorCarrito() {
  const contador = document.getElementById("contadorCarrito");
  if (!contador) return;

  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  contador.textContent = carrito.length;
}

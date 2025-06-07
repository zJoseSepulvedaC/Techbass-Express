document.addEventListener("DOMContentLoaded", function () {
  const contenedor = document.getElementById("contenedorCarrito");
  const btnPagar = document.getElementById("btnPagar");

  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  function renderizarCarrito() {
    contenedor.innerHTML = "";

    if (carrito.length === 0) {
      contenedor.innerHTML = "<p class='text-center'>No hay juegos en el carrito.</p>";
      btnPagar.disabled = true;
      return;
    }

    carrito.forEach((juego, index) => {
      const card = document.createElement("div");
      card.className = "col-12 col-sm-6 col-md-4";

      card.innerHTML = `
        <div class="card h-100 text-center shadow-sm">
          <img src="${juego.imagen}" class="card-img-top" style="height: 180px; object-fit: contain;" alt="${juego.nombre}">
          <div class="card-body">
            <h5 class="card-title">${juego.nombre}</h5>
            <p class="card-text">Categoría: ${juego.categoria}</p>
            <button class="btn btn-danger btn-sm" onclick="eliminarJuego(${index})">Eliminar</button>
          </div>
        </div>
      `;
      contenedor.appendChild(card);
    });

    btnPagar.disabled = false;
  }

  window.eliminarJuego = function(index) {
    carrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    renderizarCarrito();
  };

  btnPagar.addEventListener("click", function () {
    localStorage.removeItem("carrito"); // Vaciar carrito después del "pago"
    window.location.href = "simularPago.html";
  });

  renderizarCarrito();
});

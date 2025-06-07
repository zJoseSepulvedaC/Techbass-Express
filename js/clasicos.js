document.addEventListener("DOMContentLoaded", function () {
  const botones = document.querySelectorAll(".agregar-carrito");
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  actualizarContadorCarrito();

  botones.forEach(boton => {
    const nombre = boton.getAttribute("data-nombre");
    const imagen = boton.getAttribute("data-imagen");
    const yaEnCarrito = carrito.some(j => j.nombre === nombre);

    if (yaEnCarrito) {
      boton.innerText = "Agregado";
      boton.disabled = true;
    }

    boton.addEventListener("click", () => {
      const juego = {
        nombre: nombre,
        categoria: "Clásicos",
        imagen: imagen
      };

      carrito.push(juego);
      localStorage.setItem("carrito", JSON.stringify(carrito));

      boton.innerText = "Agregado";
      boton.disabled = true;

      actualizarContadorCarrito();
    });
  });
});

function actualizarContadorCarrito() {
  const contador = document.getElementById("contadorCarrito");
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  if (contador) {
    contador.textContent = carrito.length;
  }
}

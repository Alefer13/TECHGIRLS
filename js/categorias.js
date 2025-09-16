document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".categorias-container");
  const items = document.querySelectorAll(".categoria-item");
  const btnPrev = document.querySelector(".carousel-btn.prev");
  const btnNext = document.querySelector(".carousel-btn.next");

  let index = 0; // posición actual
  const totalItems = items.length;
  const visibleItems = 4; // siempre mostramos 4

  // función para mover
  function updateCarousel() {
    const itemWidth = items[0].offsetWidth + 25; // ancho tarjeta + gap
    container.style.transform = `translateX(-${index * itemWidth}px)`;
  }

  // botón siguiente
  btnNext.addEventListener("click", () => {
    index++;
    if (index > totalItems - visibleItems) {
      index = 0; // vuelve al inicio (loop)
    }
    updateCarousel();
  });

  // botón anterior
  btnPrev.addEventListener("click", () => {
    index--;
    if (index < 0) {
      index = totalItems - visibleItems; // vuelve al final (loop)
    }
    updateCarousel();
  });
});






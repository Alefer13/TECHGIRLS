function calcularCafe() {
  const p1 = document.getElementById("p1").value;
  const p2 = document.getElementById("p2").value;
  const resultado = document.getElementById("resultado");

  // Validar que se hayan respondido todas las preguntas
  if (!p1 || !p2) {
    resultado.textContent = "Por favor, responde todas las preguntas 😊";
    resultado.style.backgroundColor = "rgba(255,0,0,0.5)";
    resultado.style.color = "#fff";
    return;
  }

  let cafe = "";
  let imagen = "";
  let colorTexto = "#fff"; // color por defecto del resultado

  // Determinar el tipo de café según las respuestas
  if (p1 === "Tranquilas" && p2 === "Dulce") {
    cafe = "Capuchino";
    imagen = "https://images.unsplash.com/photo-1527169402691-feff5539e52c";
    colorTexto = "#FFD700"; // color café claro
  } else if (p1 === "Productivas" && p2 === "Intenso") {
    cafe = "Espresso";
    imagen = "https://images.unsplash.com/photo-1511920170033-f8396924c348";
    colorTexto = "#FFD700"; // dorado
  } else {
    cafe = "Latte";
    imagen = "https://images.unsplash.com/photo-1509042239860-f550ce710b93";
    colorTexto = "#FFD700"; // color latte
  }

  // Mostrar el resultado con texto e imagen
  resultado.innerHTML = `¡Eres un ${cafe}! <br><img src="${imagen}" alt="${cafe}">`;
  resultado.style.backgroundColor = "rgba(0,0,0,0.5)";
  resultado.style.color = colorTexto;

  // Animación “pop”
  resultado.classList.add('show');
  setTimeout(() => resultado.classList.remove('show'), 500);

  // Cambiar el fondo de la página al café correspondiente
  document.body.style.backgroundImage = `url('${imagen}')`;
}
function calcularCafe() {
  const p1 = document.getElementById("p1").value;
  const p2 = document.getElementById("p2").value;
  const resultado = document.getElementById("resultado");

  let cafe = "";
  let imagen = "";

  if (p1 === "Tranquilas" && p2 === "Dulce") {
    cafe = "Capuchino";
    imagen = "https://images.unsplash.com/photo-1527169402691-feff5539e52c";
  } else if (p1 === "Productivas" && p2 === "Intenso") {
    cafe = "Espresso";
    imagen = "https://images.unsplash.com/photo-1511920170033-f8396924c348";
  } else {
    cafe = "Latte";
    imagen = "https://images.unsplash.com/photo-1509042239860-f550ce710b93";
  }

  resultado.textContent = `¡Eres un ${cafe}!`;
  document.body.style.backgroundImage = `url('${imagen}')`;
}

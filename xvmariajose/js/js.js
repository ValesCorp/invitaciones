// Lógica del Contador
document.addEventListener('DOMContentLoaded', () => {
  // Tu código se ejecutará al cargar la página
  console.log('¡JavaScript cargado y listo!');


  // Ejemplo: modificar un elemento
  // Función de ejemplo
function iniciarApp() {
  alert('App iniciada desde archivo externo!');
}

const fechaEvento = new Date(
    "December 27, 2025 18:00:00",
).getTime();

const x = setInterval(function() {
    const ahora = new Date().getTime();
    const distancia = fechaEvento - ahora;

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor(
        (distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutos = Math.floor(
        (distancia % (1000 * 60 * 60)) / (1000 * 60),
    );
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    // Asegura que los IDs existen antes de intentar actualizarlos
    if (document.getElementById("days"))
        document.getElementById("days").innerText = dias;
    if (document.getElementById("hours"))
        document.getElementById("hours").innerText =
        horas < 10 ? "0" + horas : horas;
    if (document.getElementById("minutes"))
        document.getElementById("minutes").innerText =
        minutos < 10 ? "0" + minutos : minutos;
    if (document.getElementById("seconds"))
        document.getElementById("seconds").innerText =
        segundos < 10 ? "0" + segundos : segundos;

    if (distancia < 0) {
        clearInterval(x);
        if (document.getElementById("timer"))
            document.getElementById("timer").innerHTML =
            "<h3 style='color:var(--accent-pink)'>¡FELICIDADES!</h3>";
    }
}, 1000);

// Lógica del Carrusel de Imágenes
let currentIndex = 0;
const carousel = document.getElementById("carousel-images");
// Usar setTimeout para revisar que esté cargado el dato
setTimeout(() => {
    if (carousel) {
        const totalImages = carousel.children.length;

        window.moveCarousel = function(direction) {
            currentIndex =
                (currentIndex + direction + totalImages) %
                totalImages;
            const offset = -currentIndex * 100;
            carousel.style.transform = `translateX(${offset}%)`;
        };
    }
}, 0);
});

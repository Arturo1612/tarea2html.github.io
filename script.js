// Variable para llevar el estado de las imágenes
let isOriginal = true;

document.addEventListener("DOMContentLoaded", function () {
    // Asigna la función al botón
    document.querySelector("button").onclick = changePhotos;
});

function changePhotos() {
    if (isOriginal) {
        // Cambiar a las nuevas imágenes
        document.getElementById("koji").src = "koji-kondo-new.png";
        document.getElementById("kataoka").src = "kataoka-new.png";
    } else {
        // Volver a las imágenes originales
        document.getElementById("koji").src = "koji-kondo.jpg";
        document.getElementById("kataoka").src = "Kataoka-Manaka.jpg";
    }
    // Alternar el estado
    isOriginal = !isOriginal;

    console.log(`Fotos ${isOriginal ? "originales" : "nuevas"} activadas.`);
}

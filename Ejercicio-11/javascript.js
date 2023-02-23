// function cambiarEstilo(hojaDeEstilo) {
//     document
//         .getElementById("paginaDeEstilo")
//         .setAttribute("href", hojaDeEstilo);
// }

const cambiarEstilo = document.querySelector(".estilo");
const boton = document.querySelector("#botonCambiar");
console.log(cambiarEstilo);
boton.addEventListener("click", () => {
    if (cambiarEstilo.href === "http://127.0.0.1:5500/Ejercicio-11/") {
        cambiarEstilo.href = "/css/estilos-retro.css";
    } else if (cambiarEstilo.href === "/css/estilos-retro.css") {
        cambiarEstilo.href = "/css/estilos-futuro.css";
    } else {
        cambiarEstilo.href = "/css/estilos.css";
    }
}); //arrow function
console.log(cambiarEstilo);

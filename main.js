import { saludar } from "./saludo.js";

const resultado = saludar();

// Mostrar en consola
console.log(resultado);

// Mostrar en pantalla
document.getElementById("mensaje").textContent = resultado;
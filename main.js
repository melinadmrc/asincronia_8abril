import { saludar } from "./saludo.js";
import { gritar } from "./gritar.js";
import { hacerPizza } from "./pizza.js";
import { viajarEnElTiempo } from "./tiempo.js";
import { pedirComida } from "./restaurante.js";

// 1. EL ROBOT SALUDADOR
const btnSaludo = document.getElementById("btnSaludo");
const resSaludo = document.getElementById("resSaludo");

btnSaludo.addEventListener("click", () => {
  resSaludo.textContent = saludar();
});

// 2. LA CAJA SORPRESA
const inputTexto = document.getElementById("inputTexto");
const btnGritar = document.getElementById("btnGritar");
const resGritar = document.getElementById("resGritar");

btnGritar.addEventListener("click", () => {
  resGritar.textContent = gritar(inputTexto.value);
});

// 3. EL HORNO DE PIZZA
const btnPizza = document.getElementById("btnPizza");
const resPizza = document.getElementById("resPizza");

btnPizza.addEventListener("click", () => {
  resPizza.textContent = "Cocinando pizza...";

  const quemada = Math.random() < 0.5;

  hacerPizza(quemada)
    .then((mensaje) => {
      resPizza.textContent = mensaje;
    })
    .catch((error) => {
      resPizza.textContent = error;
    });
});

// 4. LA MÁQUINA DEL TIEMPO
const btnTiempo = document.getElementById("btnTiempo");
const resTiempo = document.getElementById("resTiempo");

btnTiempo.addEventListener("click", async () => {
  resTiempo.textContent = "Viajando en el tiempo...";

  const mensaje = await viajarEnElTiempo();
  resTiempo.textContent = mensaje;
});

// 5. EL MENÚ DEL RESTAURANTE
const btnComida = document.getElementById("btnComida");
const resComida = document.getElementById("resComida");

btnComida.addEventListener("click", async () => {
  resComida.textContent = "Pidiendo comida...";

  try {
    const plato = await pedirComida();
    resComida.textContent = plato;
  } catch (error) {
    resComida.textContent = error;
  }
});
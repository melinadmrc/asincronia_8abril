export function pedirComida() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hayIngredientes = Math.random() < 0.7;

      if (hayIngredientes) {
        resolve("Tu plato está listo");
      } else {
        reject("So sorry, el restaurante se quedó sin ingredientes");
      }
    }, 2000);
  });
}
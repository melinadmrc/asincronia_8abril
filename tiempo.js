export function viajarEnElTiempo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("¡He vuelto del futuro!");
    }, 2000);
  });
}
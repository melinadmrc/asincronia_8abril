export function hacerPizza(quemada) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (quemada) {
        reject("¡Oh no, carbón! =(");
      } else {
        resolve("¡Pizza caliente! =)");
      }
    }, 2000);
  });
}
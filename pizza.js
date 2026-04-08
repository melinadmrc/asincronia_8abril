export function hacerPizza(quemada) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (quemada) {
        reject("¡Oh no, se quemó! =(");
      } else {
        resolve("¡Pizza caliente! =)");
      }
    }, 2000);
  });
}
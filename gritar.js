export function gritar(palabra) {
  try {
    if (!isNaN(palabra) && palabra.trim() !== "") {
      throw new Error("Es un número");
    }

    return palabra.toUpperCase();
  } catch (error) {
    return "¡Eso no es una palabra, es un número!";
  }
}
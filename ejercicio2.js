const prompt = require('prompt-sync')();

let pinCorrecto = "1234";

let intento = prompt("Escribe tu PIN: ");

while (intento !== pinCorrecto) {
  console.log("PIN incorrecto. Intenta de nuevo.");
  intento = prompt("Escribe tu PIN: ");
}

console.log("¡Bienvenido a Nequi!");

const prompt = require('prompt-sync')();

let opcion;

  console.log("");
  console.log("--- MENU NEQUI ---");
  console.log("1) Ver saldo");
  console.log("2) Enviar dinero");
  console.log("3) Recargar");
  console.log("4) Salir");
  
  opcion = prompt("Elige una opcion (1-4): ");
  
  if (opcion === "1") {
    console.log("Tu saldo es: $60000");
  } else if (opcion === "2") {
    console.log("Escribe el numero al que vas a enviar...");
  } else if (opcion === "3") {
    console.log("Elige el metodo de recarga...");
  } else if (opcion === "4") {
    console.log("Saliendo de la app. ¡Hasta pronto!");
  } else {
    console.log("Opcion no valida.");
  }
  
  while (opcion !== "4");

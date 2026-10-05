let movimientos = [
  { valor: 50000, tipo: "transferencia" },
  { valor: 0, tipo: "vacio" },
  { valor: -10000, tipo: "retiro" },
  { valor: -5000, tipo: "pago a comercio" },
  { valor: 0, tipo: "vacio" },
  { valor: -20000, tipo: "pago a comercio" }
];

console.log("Revisando la lista de movimientos...");

for (let i = 0; i < movimientos.length; i++) {
  let movActual = movimientos[i];

  // 24. Parte A - filtrar (continue)
  // Si el valor es 0, ignoramos esta vuelta y pasamos a la siguiente
  if (movActual.valor === 0) {
    console.log("Posicion " + i + ": Movimiento en 0 ignorado.");
    continue;
  }

  // 25. Parte B - buscar (break)
  // Si encontramos el pago a comercio, avisamos y rompemos el bucle por completo
  if (movActual.tipo === "pago a comercio") {
    console.log("¡Encontrado! El primer pago a comercio esta en la posicion " + i);
    break;
  }
  
  console.log("Posicion " + i + ": Revisado, no es pago a comercio (" + movActual.tipo + ").");
}

console.log("Búsqueda finalizada.");

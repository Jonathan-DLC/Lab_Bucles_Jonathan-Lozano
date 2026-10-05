let movimientos = [50000, -20000, 15000, -5000, -10000, 30000];

let total = 0;
let cantidadRetiros = 0;

for (let i = 0; i < movimientos.length; i++) {
  let valorActual = movimientos[i];
  
  total = total + valorActual;
  
  if (valorActual < 0) {
    cantidadRetiros = cantidadRetiros + 1;
  }
}
console.log("El saldo total despues de los movimientos es:", total);
console.log("Cantidad total de retiros en el mes:", cantidadRetiros);

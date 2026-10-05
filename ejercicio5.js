let usuarios = [
  { 
    nombre: "Ana", 
    movimientos: [50000, -10000, 20000] 
  },
  { 
    nombre: "Juan", 
    movimientos: [15000, -5000, -5000, 30000] 
  },
  { 
    nombre: "Maria", 
    movimientos: [100000, -20000, -30000] 
  }
];


for (let i = 0; i < usuarios.length; i++) {
  let usuarioActual = usuarios[i];
  
  
  let totalUsuario = 0;
  
  
  for (let j = 0; j < usuarioActual.movimientos.length; j++) {
    totalUsuario = totalUsuario + usuarioActual.movimientos[j];
  }
  

  console.log("El total de movimientos de " + usuarioActual.nombre + " es: " + totalUsuario);
}

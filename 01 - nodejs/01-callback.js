// Estamos en el LADO SERVIDOR
const fs = require('fs'); // importar libreria fs
console.log("Primero");
fs.readFile(
    './a.txt', // path
    'utf-8', // codificacion
    (errorLectura, contenido) => {
        if(errorLectura){
            console.error('ERROR lectura 1');
        }else{
            console.log('TERCERO', contenido)
        }
    }
)
  
console.log("Segundo");

const fs = require('fs');

function promesaEsPar(numero){
    const miPrimerPromesa = new Promise(
        (resolve,reject)=>{
            if(numero % 2 === 0){
                resolve(numero); // RETURN
            }else{
                reject('No es par!'); // THROW
            }
        }
    );
    return miPrimerPromesa
}
function promesaElevarAlCuadrado(numero){
    return new Promise(res=>res(numero * numero));
}

promesaEsPar(4)
    .then( // continuo async
        (respuestaEsPar)=>{
            console.log('Es par', respuestaEsPar);
            return promesaElevarAlCuadrado(
                respuestaEsPar
            );
        }
    )
    .then( // try
        (respuestaElevarCuadrado)=>{
            console.log('Elevado: ', 
                respuestaElevarCuadrado);
        }
    )
    .catch( // catch
        (respuestaError)=>{
            console.log('NO ES PAR', respuestaError);
        }
    );

function leerArchivoPromesa(nombreArchivo){
    return new Promise(
        (res, rej)=>{ 
            fs.readFile(
                nombreArchivo, // path
                'utf-8', // codificacion
                (errorLectura, contenido) => {
                    if(errorLectura){
                        rej(errorLectura);
                    }else{
                        res(contenido);
                    }
                }
            );
        }
    );
}
leerArchivoPromesa('./a.txt')
    .then(
        (contenidoArchivo)=>{
            console.log('Contenido:', contenidoArchivo);
        }
    ).catch(
        (error)=>{
            console.error('ERROR:', error);
        }
    )











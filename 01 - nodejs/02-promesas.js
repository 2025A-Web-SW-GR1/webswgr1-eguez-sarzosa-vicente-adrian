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

promesaEsPar(3)
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














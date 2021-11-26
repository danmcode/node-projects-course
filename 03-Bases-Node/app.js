const { crearArchivo } = require('./helpers/multiplicar');

console.clear(); //Limpiar consola
//obtener la base entrada de consola concepto


const base = 3;

crearArchivo(base)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
    .catch( err => console.log(err) );
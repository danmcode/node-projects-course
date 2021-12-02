const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs.js');
const colors = require('colors');

//require('colors') -> Son require sencillos

//obtener la base entrada de consola concepto
// const [, , arg3 = 'base=5' ] = process.argv;
// const [, base = 5] = arg3.split('=');
//console.log(process.argv);

console.clear(); //Limpiar consola
// console.log(argv);
crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));
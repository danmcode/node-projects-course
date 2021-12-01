const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true
    })
    .check((argv, options) => {
        if ( isNaN( argv.b ) ) {
            throw 'La base tienen que ser un número'
        }
        return true;
    })
    .option(
        'l', {
            alias: 'list',
            type: 'boolean',
            default: 'false',
            boolean: 'true',
        }
    )
    .argv;

//obtener la base entrada de consola concepto
// const [, , arg3 = 'base=5' ] = process.argv;
// const [, base = 5] = arg3.split('=');
//console.log(process.argv);


console.clear(); //Limpiar consola
console.log(argv);

//console.log('base: yargs', argv.base);

const base = argv.base;
const list = argv.list;


crearArchivo(base, list)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
    .catch( err => console.log(err) );
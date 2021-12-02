const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        describe: 'Es la base a multiplicar'
    })
    .option(
        'l', {
        alias: 'list',
        type: 'boolean',
        default: 'false',
        describe: 'Lista la tabla de multiplicar'
    })
    .option(
        'h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Hasta que numero se desea multiplicar la base'
    })
    .check((argv, options) => {
        if (isNaN(argv.b) || isNaN(argv.h)) {
            throw 'La base o el hasta tienen que ser un número'
        }
        return true;
    })
    .argv;

    module.exports = argv;
    
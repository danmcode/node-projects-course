const fs = require('fs'); //Requerir el paquete file system
require('colors');
const colors = require('colors');

const crearArchivo = async( base = 5, list = false, hasta = 10 ) => {

    try {
        let salida, consola  = '';

        for (let index = 1; index <= hasta; index++) {
            salida  += `${ base } x ${ index } = ${ base * index }\n`;
            consola += `${ base } ${'x'.green} ${ index } ${"=".green} ${ base * index }\n`;
        }

        if ( list === true) {
            console.log('======================'.green);
            console.log('  Tabla del:'.green, colors.blue(base));
            console.log('======================'.green);
            console.log(consola);
        }

        fs.writeFile(`./salida/tabla-${ base }.txt`, salida, ( err )=>{
            if( err ) throw err;
        });
        
    
        return `tabla-${ base }.txt`;

    } catch (err) {
        throw err
    }
}

module.exports = {
    crearArchivo
}

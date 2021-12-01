const fs = require('fs'); //Requerir el paquete file system

const crearArchivo = async( base = 5, list = false ) => {

    try {
        console.log('======================');
        console.log('  Tabla del:', base);
        console.log('======================');

        let     salida  = '';

        for (let index = 1; index <= 10; index++) {
            salida += `${ base } x ${ index } = ${ base * index }\n`;
        }
        
        if ( list ) {
            console.log(salida);
        }

        fs.writeFile(`tabla-${ base }.txt`, salida, ( err )=>{
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

require('colors');
const { 
    guardarDB,
    leerDB,
 } = require('./helpers/guardarArchivo');
//const { mostrarMenu, pausa } = require('./helpers/mensajes');
const { 
    inquirerMenu, 
    pausa,
    leerInput,
} = require('./helpers/inquirer');

const Tareas = require('./models/tareas')

const main = async () => {
    
    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if ( tareasDB ) {
        //Establecer tareas
        //TODO: cargarTareas
        tareas.cargarTareasFromArray(tareasDB);
    }

    do {
        //opt = await mostrarMenu();
        //if(opt !== '0') await pausa();

        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                //Crear opcion
                const desc = await leerInput('Descripción: ');
                tareas.crearTarea(desc);
                break;
            case '2':
                tareas.listadoCompleto();
                break;
        }

        guardarDB( tareas.listadoArr );

        //const tareas = new Tareas();
        //const tarea = new Tarea('Comprar');

        //tareas._listado[tarea.id] = tarea;

        //console.log(tareas);

        await pausa();

    } while (opt !== '0');

}

main();
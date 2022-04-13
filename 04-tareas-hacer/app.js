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
    listTaskToDelete,
    confirm,
    showCheckList,
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
            case '3':
                tareas.listarPendientesCompletadas();
                break;
            case '4':
                tareas.listarPendientesCompletadas(false);
                break;
            case '5':
                const ids = await showCheckList(tareas.listadoArr);
                tareas.toggleCompletadas( ids );
                break;
            case '6':
                //Delete task
                const id = await listTaskToDelete( tareas.listadoArr );

                if ( id !== 0 ) {
                    const confirmed = await confirm('¿Está seguro?');
                    if (confirmed) {
                        tareas.deleteTask( id );
                        console.log('Tarea Borrada');
                    }
                }
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
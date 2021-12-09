require('colors');
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
                console.log(tareas._listado);
                break;
        }

        //const tareas = new Tareas();
        //const tarea = new Tarea('Comprar');

        //tareas._listado[tarea.id] = tarea;

        //console.log(tareas);

        await pausa();

    } while (opt !== '0');

}

main();
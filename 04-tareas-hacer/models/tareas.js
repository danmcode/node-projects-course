const Tarea = require('./tarea');

/**
 * _listado:
 *      {'uuid-123-123-2: {id:12, desc:asd, completadoEn: 12332}'}
 */

class Tareas {
    _listado = {};

    get listadoArr() {

        const listado = [];

        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        });

        return listado;
    };

    constructor() {
        this._listado = {};
    }

    deleteTask( id='' ){
        if( this._listado[id] ){
            delete this._listado[id];
        }
    }

    cargarTareasFromArray(tareas = []) {

        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        });

    }

    crearTarea(desc = '') {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto() {
        console.log();
        this.listadoArr.forEach((tarea, index) => {

            const num = `${index + 1}`.green;
            const { desc, completadoEn } = tarea;
            const estado = (completadoEn)
                ? 'Completado'.green
                : 'Pendiente'.red;

            console.log(`${num} ${desc} :: ${estado}`);

        });   //1. Alma :: Completada | Pentiente
    }

    listarPendientesCompletadas(completadas = true) {

        console.log();
        let counter = 0;
        this.listadoArr.forEach(tarea => {

            const { desc, completadoEn } = tarea;

            const estado = (completadoEn)
                ? 'Completado'.green
                : 'Pendiente'.red;

            if (completadas) {
                if (completadoEn) {
                    counter += 1;
                    console.log(`${(counter + '.').green} ${desc} :: ${completadoEn}`);
                }
            } else {
                if (!completadoEn) {
                    counter += 1;
                    console.log(`${(counter + '.').green} ${desc} :: ${estado}`);
                }
            }
        });
    }


}

module.exports = Tareas;
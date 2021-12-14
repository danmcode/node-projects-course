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
        // 1. en Verde
        // Completada Verde
        // Pendiente: rojo]
        // console.log();
        // let completado = "Pendiente".red;

        // this.listadoArr.forEach((tarea, index) => {

        //     if( tarea.completadoEn ){
        //         completado = "Pendiente".green;
        //     }
        //     let num = (index + 1) + '.';
        //     console.log( `${ num.green } ${ tarea.desc }::${ completado }` );
        // });

        //Otra forma
        console.log();
        this.listadoArr.forEach((tarea, index) => {
            
            const num = `${ index + 1 }`.green;
            const { desc, completadoEn } = tarea;
            const estado = ( completadoEn )
                            ? 'Completado'.green
                            : 'Pendiente'.red;
            
            console.log(`${ num } ${ desc } :: ${estado}`);

        });

        //1. Alma :: Completada | Pentiente
    }
}

module.exports = Tareas;
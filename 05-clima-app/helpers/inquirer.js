const inquirer = require('inquirer');

require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que deseas hacer?',
        choices: [
            {
                value: 1,
                name: `${'1.'.green } Buscar Ciudad`
            },        
            {
                value: 2,
                name: `${'2.'.green} Historial`
            },
            {
                value: 0,
                name: `${'0.'.green} Salir`
            },
        ]
    }
];

const inquirerMenu = async () => {
    console.clear();
    console.log('=========================='.green);
    console.log('  Seleccione una opción   '.white);
    console.log('==========================\n'.green);

    const {opcion} = await inquirer.prompt(preguntas);

    return opcion;
};

//Wait for the next instruction
const pausa = async() => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'Enter'.green} para continuar.`
        }
    ]
    const aws = await inquirer.prompt(question);
    console.log('\n');
}

const leerInput = async( message ) => {
    
    const question = [
        {
            type: 'input',
            name: 'text',
            message,
            validate (value){
                if ( value.length === 0 ) {
                    return 'Por favor ingrese un valor';
                }

                return true;
            }
        }
    ];

    const { text } = await inquirer.prompt(question);
    return text;
}

const listOfPlaces = async( places = [] ) => {

    const choices = places.map(
        (place, i) => {

            const idx = `${ i + 1 }.`.green;

            return {
                value: place.id,
                name: `${idx} ${ place.name }`,
            }
        }   
    );

    choices.unshift({
        value: '0',
        name: '0.'.green + ' Cancelar',
    });

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Seleccionar lugar:',
            choices
        }
    ];

    const {id} = await inquirer.prompt(preguntas);
    return id;
}

const showCheckList = async( task = [] ) => {

    const choices = task.map(
        (tarea, i) => {

            const idx = `${ i + 1 }.`.green;

            return {
                value: tarea.id,
                name: `${idx} ${ tarea.desc }`,
                checked: ( tarea.completadoEn ) ? true : false,
            }
        }   
    );

    const preguntas = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Selecciones..',
            choices
        }
    ];

    const {ids} = await inquirer.prompt(preguntas);
    return ids;
}

const confirm = async (message) => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const { ok } = await inquirer.prompt(question);
    return ok;
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listOfPlaces,
    confirm,
    showCheckList,
}
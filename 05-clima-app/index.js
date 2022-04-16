require('dotenv').config(); //envairoment variables
const { leerInput, inquirerMenu, pausa } = require('./helpers/inquirer');
const Searchs = require('./models/searchs');

//console.log(process.env.MAPBOX_KEY); //Show mapbox key

const main = async() => {
     let opt;

     //search instance
     const searchs = new Searchs();

     //Infinite cicle for execute the menu
     do {
        //Listen the option selected
        opt = await inquirerMenu();
        switch ( opt ) {
            case 1:
                // Show message
                const place = await leerInput('Ciudad: ');
                await searchs.city( place );
                // Search places

                // Select a place

                // Weather city

                // Show results
                console.log('\nInformación de la Ciudad\n'.green);
                console.log('Ciudad: ');
                console.log('Lat: ');
                console.log('Lng: ');
                console.log('Temperatura: ');
                console.log('Mínima: ');
                console.log('Máxima: ');

                break;
            case 2:
                console.log('Show History');
                break;
            case 0:
                console.log('Exit');
                break;  
            default:
                break;
        }

        //Wait for the next instructions
        await pausa();
         
     } while (opt !== 0);
}

main();
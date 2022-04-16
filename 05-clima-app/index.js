require('dotenv').config(); //envairoment variables
const { leerInput, inquirerMenu, pausa, listOfPlaces } = require('./helpers/inquirer');
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
                const searchPlace  = await leerInput('Ciudad: ');
                
                // Search places
                const places = await searchs.city( searchPlace );
                
                // Select a place
                const placeId = await listOfPlaces(places);
                //console.log(placeId);
                const placeSelected = places.find( place => place.id == placeId );
                //console.log(placeSelected);

                // Weather city
                const wheater = await searchs.wheaterPlace(placeSelected.lat, placeSelected.lng);

                // Show results
                console.clear();
                console.log('\nInformación de la Ciudad\n'.green);
                console.log('Ciudad:', placeSelected.name.green);
                console.log('Lat:', placeSelected.lat);
                console.log('Lng:', placeSelected.lng);
                console.log('Temperatura:', wheater.temp);
                console.log('Mínima:', wheater.min);
                console.log('Máxima:', wheater.max );
                console.log('Clima:', wheater.desc.green);

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
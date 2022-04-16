const fs = require('fs');

const axios = require('axios');


class Searchs {

    history = [];
    dbPath = './db/database.json';

    constructor(){
        //TODO: read database if exists
        this.readDB();
    }

    get capitalizeHistory(){
        return this.history.map( place => {

            let words = place.split(' ');
            words = words.map( p => p[0].toUpperCase() + p.substring(1) );

            return words.join(' ');
        });
    }

    //Peticion
    get paramsMapBox(){
        return {
            'access_token':process.env.MAPBOX_KEY,
            'limit':5,
            'language':'es',
        }
    }

    async city( place = '' ){

        try {
            //Get HTTP info
            //console.log({place});
            //const answ = await axios.get('https://reqres.in/api/users?page=2');
            //console.log(answ.data);

            //Create axios instance
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ place }.json`,
                params: this.paramsMapBox,
            });

            const answ = await instance.get();
            //console.log(answ.data.features);
            
            //return the places that coincide with the user search
            return answ.data.features.map( place => ({
                id: place.id,
                name: place.place_name,
                lng: place.center[0],
                lat: place.center[1],
            }));

        } catch (error) {
            console.log('error try get city information');
            return [];
        }
    }

    get paramsWheater(){
        return {
            'appid': process.env.OPEN_WEATHER_KEY,
            'units': 'metric',
            'lang': 'es',
        };
    }

    async wheaterPlace(lat, lon){
        try {
            // axios instance
            const instance = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                params: {...this.paramsWheater, lat, lon}
            });

            //anws exttract information
            const answ = await instance.get();
            const {weather, main} = answ.data;

            return {
                desc: weather[0].description,
                min: main.temp_min,
                max: main.temp_max,
                temp: main.temp,
            }
            
        } catch (error) {
            console.log('No search');
            return {};
        }
    }

    addHistory( place = '' ){

        //TODO: prevent duplicate
        if (this.history.includes( place.toLocaleLowerCase() )) {
            return;
        }

        this.history = this.history.slice(0, 5);

        this.history.unshift( place.toLocaleLowerCase() );

        //Record db
        this.saveDB();
    }

    saveDB(){

        const payload = {
            history: this.history,
        }

        fs.writeFileSync( this.dbPath, JSON.stringify(payload) );
    }

    readDB(){
        //Debe existir....
        if( !fs.existsSync(this.dbPath) ){
            return;
        }

        //const info ... readFileSync... 
        const info = fs.readFileSync(this.dbPath, { encoding: 'utf-8' });
        const data = JSON.parse( info );
        return this.history = data.history;
    }

}

module.exports = Searchs;
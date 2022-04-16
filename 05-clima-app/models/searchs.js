const axios = require('axios');

class Searchs {

    history = ['Tegucigalpa','Madrid','San José'];

    constructor(){
        //TODO: read database if exists
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
            'lat': 'metric',
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

}

module.exports = Searchs;
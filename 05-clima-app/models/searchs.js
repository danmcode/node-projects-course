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

            const answ =await instance.get();
            console.log(answ.data);
    
            //return the places that coincide with the user search
            return [];
        } catch (error) {
            console.log('error try get city information');
            return [];
        }

    }

}

module.exports = Searchs;
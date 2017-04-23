let axios = require('axios');

// api: app-default-api
// my api: my-personal-api

const SOME_API = 'http://api';

module.exports = {
    getTemp: function(location){
        let encodedLocation = encodeURIComponent(location);
        let requestUrl = `${SOME_API}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function(res){
            if (res.data.cod && res.data.message){
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function(res){
            // Throws error msg
            throw new Error(res.data.message);
        });
    
    }
};
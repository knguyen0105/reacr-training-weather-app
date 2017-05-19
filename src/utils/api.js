var axios = require('axios');
var params = '&appid=2ab8418a2085f7be3b9808c2d6f3fe08';

module.exports = {
    getCurrentWeather: function(city) {
        return axios.get('http://api.openweathermap.org/data/2.5/weather?q='+ city+ params);
    } ,
    getFiveDaysForecast: function(city) {
        return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q='+city+params+'&cnt=5')
                .then(function(data) {
                    var list = data.data.list;                    
                    //var res  = list.map((item) => item.weather[0])
                    //console.log(res);
                    return list;
                });
    }
}


//http://api.openweathermap.org/data/2.5/weather?q=boston&appid=2ab8418a2085f7be3b9808c2d6f3fe08
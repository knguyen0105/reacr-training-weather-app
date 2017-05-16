import React, { Component } from 'react';
var api = require('./utils/api');

class Forecast extends Component {

    constructor(props) {
        super(props);
        this.state = {
            city: null,
            forecast: null, 
            loading: true
        }
    }

    componentDidMount() {
        var city = 'Hanoi';
        api.getFiveDaysForecast(city).then(function(data) {
            console.log(data);
          this.setState(function() {
              
              return {
                  city: city,
                  forecast: data,
                  loading: false
              }
          })  
        }.bind(this))
    }

    render() {
        var city = this.state.city;
        var forecast = this.state.forecast;
        var loading = this.state.loading;
        if (loading === true) {
            return <p>Loading!</p>
        }
        
        return (
            <div>                        
            <h1 id='forecast-city'>{city}</h1>
            <div id='forecast-container'>                
                {forecast.map((day,index) => {
                    return (
                        <div key={index} className='daily-forecast'>
                            <p>{day.main}</p>
                        </div>
                    )
                })}
                
            </div>
            </div>
        )
    }
}

module.exports = Forecast;
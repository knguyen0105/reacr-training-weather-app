import React, { Component } from 'react';
import './App.css';
var Forecast = require('./Forecast.js');

function Header(props) {
  return (
    <div id='header'>
      <h1>Clever Title </h1>
      <CityInput />
    </div>
  )
}

function CityInput(props) {
  return (
    <div className='city'>
    <input type='text' placeholder='St. George, Utah' />
    <button type='submit'>Get weather </button>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div id='main-input'>
          <h1>Enter a City and a state </h1>
          <CityInput />
        </div>

        <Forecast />
      </div>
    );
  }
}

export default App;


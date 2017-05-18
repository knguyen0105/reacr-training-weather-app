import React, { Component } from 'react';
import './App.css';
var Forecast = require('./Forecast.js');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

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

function Home(props) {
  return (
          <div id='main-input'>            
            <h1>Enter a City and a state </h1>
            <CityInput />
          </div>
  )
}

class App extends Component {
  render() {
    return (
      
      <Router>
        <div>
          <Header />          
          <Switch>            
            <Route exact path='/' component={Home} />
            <Route path='/forecast' component={Forecast} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;


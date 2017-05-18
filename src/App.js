import React, { Component } from 'react';
import './App.css';
var Forecast = require('./Forecast.js');
var CityInput = require('./CityInput.js');
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


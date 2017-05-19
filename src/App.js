import React, { Component } from 'react';
import './App.css';
var Forecast = require('./Forecast.js');
var Detail = require('./Detail.js');
var CityInput = require('./CityInput.js');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;


const Header = () => (
  <div id='header'>
    <h1>Clever Title </h1>
    <CityInput />
  </div>
)


const Home = () => (
    <div id='main-input'>            
      <h1>Enter a City and a state </h1>
      <CityInput />
    </div>
)


class App extends Component {
  render() {
    return (
      
      <Router>
        <div>
          <Header />          
          <Switch>            
            <Route exact path='/' component={Home} />
            <Route path='/forecast' component={Forecast} />
            <Route path='/details/:city' component={Detail} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;


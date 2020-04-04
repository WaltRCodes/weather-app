import React, { Component } from 'react';
import {env} from './components/env';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.kelvinToFahrenheit= this.kelvinToFahrenheit.bind(this);
  }
  componentDidMount() {
    fetch("http://api.openweathermap.org/data/2.5/forecast?id=5128638&appid="+env.key)
      .then(response => response.json()) 
      .then(
        result => {
          console.log(result);
          console.log(result.list);
        }
      ).catch(e => console.log("there's a error", e))
  }

  kelvinToFahrenheit(temp) {
    let  Fahrenheit = temp - 273.15;
    Fahrenheit = Fahrenheit * 9/5 + 32;
    return Fahrenheit;
  }

  
  render (){
    
    return (
      <div className="App">
        
      </div>
    )
  }
  
}



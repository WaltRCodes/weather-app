import React, { Component } from 'react';
import {env} from './components/env';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weather: {}
    }
    this.kelvinToFahrenheit= this.kelvinToFahrenheit.bind(this);
  }
  kelvinToFahrenheit(temp) {
    let  Fahrenheit = temp - 273.15;
    Fahrenheit = Fahrenheit * 9/5 + 32;
    return Fahrenheit;
  }
  componentDidMount() {
    fetch("http://api.openweathermap.org/data/2.5/forecast?id=5128638&appid="+env.key)
      .then(response => response.json()) 
      .then(
        result => {
          console.log(result);
          console.log(result.list);
          console.log(result.list[0]);

          console.log(result.list[0].dt_txt);
          console.log(result.list[0].weather[0].description);
          //https://www.w3schools.com/jsref/jsref_tofixed.asp
          console.log(this.kelvinToFahrenheit(result.list[0].main.temp).toFixed(2));
          console.log(result.list[0].main.feels_like);
          console.log(result.list[0].main.temp_min);

        }
      ).catch(e => console.log("there's a error", e))
  }

  

  
  render (){
    
    return (
      <div className="App">
        
      </div>
    )
  }
  
}



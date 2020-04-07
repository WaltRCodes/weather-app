import React, { Component } from 'react';
import {env} from './components/env';
import './App.css';
import {BrowserRouter, Switch, Route, Link, useParams} from "react-router-dom";
import Monday from './components/Monday';
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weather: [{
        date:'',
        description:'',
        current: '',
        min:''
      }]
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
          console.log(this.kelvinToFahrenheit(result.list[0].main.feels_like).toFixed(2));
          console.log(this.kelvinToFahrenheit(result.list[0].main.temp_min).toFixed(2));
          let weatherArray=[];
          let newWeatherObject;
          for(let i =0;i<7;i++){
            newWeatherObject = {
              date: result.list[i].dt_txt,
              description: result.list[i].weather[0].description,
              current: this.kelvinToFahrenheit(result.list[i].main.temp).toFixed(2),
              min: this.kelvinToFahrenheit(result.list[i].main.temp_min).toFixed(2)
            };
            weatherArray.push(newWeatherObject);
          }
          console.log(weatherArray[0].date);
          this.setState({weather: weatherArray});
          console.log(this.state.weather);
        }
      ).catch(e => console.log("there's a error", e))
  }

  

  
  render (){
    
    return (
      <div className="App">
        <BrowserRouter>
          <div>{this.state.weather[0].date}</div>
          <div>{this.state.weather[0].description}</div>
          <div>{this.state.weather[0].current}</div>
          <div>{this.state.weather[0].min}</div>
          <Link to={"/monday?date="+this.state.weather[0].date+"&description="+this.state.weather[0].description}>Monday</Link>
          <Route path="/monday" component={Monday} />
        </BrowserRouter>
      </div>
    )
  }
  
}



import React, { Component } from 'react';
import {env} from './components/env';
import './App.css';
import {BrowserRouter, Switch, Route, Link, useParams} from "react-router-dom";
import Monday from './components/Monday';
import Tuesday from './components/Tuesday';
import Wednesday from './components/Wednesday';
import Thursday from './components/Thursday';
import Friday from './components/Friday';
export default class App extends Component {
  constructor(props) {
    super(props);
    let array = new Array(5);
    let weatherObject = {
      date:'',
      description:'',
      current: '',
      min:''
    };
    array.fill(weatherObject);
    this.state = {
      weather: array
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
          for(let i =0;i<6;i++){
            newWeatherObject = {
              date: result.list[i+6].dt_txt,
              description: result.list[i+6].weather[0].description,
              current: this.kelvinToFahrenheit(result.list[i+6].main.temp).toFixed(2),
              min: this.kelvinToFahrenheit(result.list[i+6].main.temp_min).toFixed(2)
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
          <Link to={"/monday?date="+this.state.weather[0].date+"&description="+this.state.weather[0].description+"&current="+this.state.weather[0].current+"&min="+this.state.weather[0].min}>Monday</Link>
          <Route path="/monday" component={Monday} />
           | 
          <Link to={"/tuesday?date="+this.state.weather[1].date+"&description="+this.state.weather[1].description+"&current="+this.state.weather[1].current+"&min="+this.state.weather[1].min}>Tuesday</Link>
          <Route path="/tuesday" component={Tuesday} />
          | 
          <Link to={"/wednesday?date="+this.state.weather[2].date+"&description="+this.state.weather[2].description+"&current="+this.state.weather[2].current+"&min="+this.state.weather[2].min}>Wednesday</Link>
          <Route path="/wednesday" component={Wednesday} />
          | 
          <Link to={"/thursday?date="+this.state.weather[3].date+"&description="+this.state.weather[3].description+"&current="+this.state.weather[3].current+"&min="+this.state.weather[3].min}>Thursday</Link>
          <Route path="/thursday" component={Thursday} />
          | 
          <Link to={"/friday?date="+this.state.weather[4].date+"&description="+this.state.weather[4].description+"&current="+this.state.weather[4].current+"&min="+this.state.weather[4].min}>Friday</Link>
          <Route path="/friday" component={Friday} />
        </BrowserRouter>
      </div>
    )
  }
  
}



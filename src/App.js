import React, { Component } from 'react';
import {env} from './components/env';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    fetch("http://api.openweathermap.org/data/2.5/forecast?id=5128638&appid="+env.key)
      .then(response => response.json()) 
      .then(
        result => {
          console.log(result);
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



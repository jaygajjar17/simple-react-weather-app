import React, { Component } from 'react';
import Weather from './Weather';
import FormIn from './FormIn';
const apikey = "e533eeae6b1c8a35bb4f3460b6b492f9";



class App extends Component {

  constructor(props)
  {
    super();
    this.state={
      city : undefined,
      country: undefined,
      wind : undefined,
      type: undefined,
      icon : undefined,
      cel : undefined
    }
    

  }

  findweather = async(e)=>
  {
    e.preventDefault();

    const city = e.target.elements.city.value;
   
    const call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);
    const response =  await call.json();
    console.log(response);

    this.setState({
      city : response.name,
      country : response.sys.country,
      wind: response.wind.speed,
      type : response.weather[0].main,
      icon :response.weather[0].icon,
      cel :response.main.temp-273.15
    }) 
  };

  render() {
    return (
      <div>
     <FormIn loadInfo ={this.findweather}/>
     <Weather city={this.state.city} country={this.state.country} wind={this.state.wind} type={this.state.type} icon ={this.state.icon} cel={this.state.cel}/>
     </div>
    );
  }
}

export default App;
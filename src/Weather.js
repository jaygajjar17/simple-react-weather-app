import React from "react";
const Weather = (props) => {
  return (
    <div>
      <h1>City : {props.city}</h1>
      <h4>Country : {props.country}</h4>
      <h3>Wind Speed :{props.wind}</h3>
      <h2>Weather :{props.type}</h2>
      <h2>
        Celsius : {props.cel}
        {"\u00b0"}
      </h2>
      <img
        src={`http://openweathermap.org/img/w/${props.icon}.png`}
        height="120px"
        width="120px"
        alt=""
      ></img>
    </div>
  );
};

export default Weather;

import React from "react";
import "./DailyWeather.css"

function DailyWeather({dailyWeatherData}) {
  return (
    <div className="daily-weather">
    {dailyWeatherData.map(item => {
    const { day, weather, temperature, weatherIcon } = item;
      return (
        <div  className="day-weather">
          <h2>{day}</h2>
          <img className="weather-icon" src={`http://openweathermap.org/img/w/${weatherIcon}.png`} alt="" />
          <h4>{weather}</h4>
          <h3>{temperature} °C</h3>
        </div>
      )
    })}
        
    </div>
  );
}

export default DailyWeather;

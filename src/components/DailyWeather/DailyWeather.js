import React from "react";
import "./DailyWeather.css"

function DailyWeather({dailyWeatherData}) {
  return (
    <div className="daily-weather">
    {dailyWeatherData.map(item => {
    const { day, weather, temperature, weatherIconSrc } = item;
    console.log("🚀 ~ file: DailyWeather.js:9 ~ DailyWeather ~ weatherIconSrc:", weatherIconSrc)
    
      return (
        <div  className="day-weather">
          <h2>{day}</h2>
          <img className="weather-icon" src={weatherIconSrc} alt="" />
          <h4>{weather}</h4>
          <h3>{temperature} °C</h3>
        </div>
      )
    })}
        
    </div>
  );
}

export default DailyWeather;

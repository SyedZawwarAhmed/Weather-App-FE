export class getDailyWeatherResponse {
  city;
  day;
  date;
  time;
  currentWeather;
  currentTemperature;
  weatherIcon;
  weatherIconSrc;

  constructor(dailyWeatherData) {
    this.city = dailyWeatherData.city;
    this.day = dailyWeatherData.day;
    this.date = dailyWeatherData.date;
    this.time = dailyWeatherData.time;
    this.weather = dailyWeatherData.weather;
    this.temperature = dailyWeatherData.temperature;
    this.weatherIcon = dailyWeatherData.weatherIcon;
    this.weatherIconSrc = dailyWeatherData.weatherIconSrc
  }
}

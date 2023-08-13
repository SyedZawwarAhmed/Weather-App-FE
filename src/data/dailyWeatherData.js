import { getDailyWeather } from "../Services/getDailyWeather";

async function dailyWeatherResponse(city) {
  const data = await getDailyWeather(city);
  return data.map(item => ({...item, weatherIconSrc: `http://openweathermap.org/img/w/${item.weatherIcon}.png`}))
}

// const dailyWeatherResponse = new getDailyWeatherResponse(dailyWeatherResponseFunction);

export { dailyWeatherResponse };
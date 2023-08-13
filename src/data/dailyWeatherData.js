import { getDailyWeather } from "../Services/getDailyWeather";

async function dailyWeatherResponse(city) {
  return await getDailyWeather(city);
}

// const dailyWeatherResponse = new getDailyWeatherResponse(dailyWeatherResponseFunction);

export { dailyWeatherResponse };
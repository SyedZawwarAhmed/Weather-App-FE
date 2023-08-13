import { useLayoutEffect, useState } from "react";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import DailyWeather from "./components/DailyWeather/DailyWeather";
import Navbar from "./components/common/Navbar/Navbar";
import { navbarFor, title } from "./data/appData";
import { currentWeatherResponse } from "./data/currentWeatherData";
import { dailyWeatherResponse } from "./data/dailyWeatherData";
import { citiesResponse } from "./data/citiesData";
import {
  getCitiesResponse,
  getDailyWeatherResponse,
  getCurrentWeatherResponse,
} from "./DTOs/index";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [cities, setCities] = useState([]);
  const [currentWeather, setCurrentWeather] = useState({});
  const [dailyWeather, setDailyWeather] = useState([]);
  const [options, setOptions] = useState([]);
  const [option, setOption] = useState(
    localStorage.getItem(navbarFor) || "Karachi"
  );

  useLayoutEffect(() => {
    async function fetchData() {
      setCities(await citiesResponse());
      setCurrentWeather(await currentWeatherResponse(option));
      setDailyWeather(await dailyWeatherResponse(option));
      setLoading(false);
    }
    fetchData();
  }, [option]);

  const citiesData = new getCitiesResponse(cities);
  const dailyWeatherData = dailyWeather.map(
    (data) => new getDailyWeatherResponse(data)
  );
  const currentWeatherData = new getCurrentWeatherResponse(currentWeather);
  currentWeather.city = option;

  const filterOptions = (text) => {
    if (text.length >= 4) {
      setOptions(
        citiesData.cities.filter((option) =>
          option.toLowerCase().includes(text.toLowerCase())
        )
      );
    } else {
      setOptions(citiesData.cities.filter((city) => city.length < 4));
    }
  };

  return (
    <div className="App">
      <Navbar
        title={title}
        options={options}
        filterOptions={filterOptions}
        setOption={setOption}
        navbarFor={navbarFor}
      />
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <>
          <CurrentWeather currentWeatherData={currentWeatherData} />
          <DailyWeather dailyWeatherData={dailyWeatherData} />
        </>
      )}
    </div>
  );
}

export default App;

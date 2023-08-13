import { useEffect, useLayoutEffect, useState } from "react";
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
import Loader from "./components/common/Loader";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [cities, setCities] = useState([]);
  const [currentWeather, setCurrentWeather] = useState({});
  const [dailyWeather, setDailyWeather] = useState([]);
  const [options, setOptions] = useState([]);
  const [option, setOption] = useState(
    localStorage.getItem(navbarFor) || "Karachi"
  );

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setCities(await citiesResponse());
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }
    fetchData()
  }, []);

  useLayoutEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setCurrentWeather(await currentWeatherResponse(option));
        setDailyWeather(await dailyWeatherResponse(option));
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "10rem",
          }}
        >
          <Loader width={40} height={40} radius={1} />
        </div>
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

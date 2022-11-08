import { createContext, useState, useEffect } from "react";

const WeatherContext = createContext();

export const WeatherProvider = function ({ children }) {
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState("");

  const getPosition = function () {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  // Getting city name
  const getCityName = async function () {
    // Getting coords
    const getCoords = await getPosition();
    const { latitude, longitude } = getCoords.coords;

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "256e146e19msh2fc5332f9017d0ep10b965jsn9570df703907",
        "X-RapidAPI-Host": "geocodeapi.p.rapidapi.com",
      },
    };

    const res = await fetch(
      `https://geocodeapi.p.rapidapi.com/GetNearestCities?latitude=${latitude}&longitude=${longitude}&range=0`,
      options
    );
    const [data] = await res.json();
    const city = data.City;
    setCity(city);
    return city.toLowerCase();
  };

  const getCityId = async function () {
    const currentLocation = await getCityName();

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "256e146e19msh2fc5332f9017d0ep10b965jsn9570df703907",
        "X-RapidAPI-Host": "foreca-weather.p.rapidapi.com",
      },
    };

    const res = await fetch(
      `https://foreca-weather.p.rapidapi.com/location/search/${currentLocation}`,
      options
    );
    const data = await res.json();
    const [cityId] = data.locations;
    return cityId.id.toString();
  };

  const getData = async function () {
    setLoading(true);
    const id = await getCityId();

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "256e146e19msh2fc5332f9017d0ep10b965jsn9570df703907",
        "X-RapidAPI-Host": "foreca-weather.p.rapidapi.com",
      },
    };

    const res = await fetch(
      `https://foreca-weather.p.rapidapi.com/forecast/daily/${id}?alt=0&tempunit=C&windunit=KMH&periods=8&dataset=full`,
      options
    );
    const data = await res.json();
    setForecast(data.forecast);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        forecast,
        loading,
        city,
        getCityId,
        getData,
        setForecast,
        setLoading,
        setCity,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;

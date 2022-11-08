import { useState, useContext } from "react";
import { FaSearch, FaLocationArrow } from "react-icons/fa";
import WeatherContext from "../context/WeatherContext";

const SearchBar = function () {
  const [text, setText] = useState("");
  const { setLoading, setForecast, setCity, getData } =
    useContext(WeatherContext);

  const getSpecificCityId = async function (text) {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "256e146e19msh2fc5332f9017d0ep10b965jsn9570df703907",
        "X-RapidAPI-Host": "foreca-weather.p.rapidapi.com",
      },
    };

    const res = await fetch(
      `https://foreca-weather.p.rapidapi.com/location/search/${text}`,
      options
    );
    const data = await res.json();
    const [cityId] = data.locations;
    setCity(cityId.name);
    return cityId.id.toString();
  };

  const getSpecificData = async function (city) {
    setLoading(true);
    const id = await getSpecificCityId(city);

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

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleSearch = () => {
    getSpecificData(text);
    setText("");
  };

  const handleKeySearch = (e) => {
    if (e.key === "Enter") {
      getSpecificData(text);
      setText("");
    }
  };

  return (
    <div className="form-control">
      <div className="relative flex items-center justify-center input-group">
        <input
          placeholder="Search by city"
          type="text"
          name="search"
          className="input input-bordered input-primary w-full relative z-10"
          value={text}
          onChange={handleText}
          onKeyDown={handleKeySearch}
        />
        <label
          htmlFor="search"
          className={`label text-md transition-all font-semibold z-0 absolute ${
            text.length === 0
              ? "bottom-0 left-0 opacity-0 invisible"
              : "-bottom-9 -left-2 visible opacity-90"
          }`}
        >
          Search by city
        </label>
        <button
          onClick={handleSearch}
          className="btn btn-primary btn-square text-base-300"
        >
          <FaSearch />
        </button>
        <button onClick={getData} className="btn btn-primary text-base-300">
          <FaLocationArrow />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

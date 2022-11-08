import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";

const CurrentCard = function () {
  const { forecast, city } = useContext(WeatherContext);
  const [today] = forecast;

  return (
    <div className="w-10/12 bg-base-300 shadow-xl mx-auto rounded-lg flex gap-12 flex-col items-center md:flex-row justify-around p-8 relative mb-12">
      <div className="">
        <h2 className="card-title text-4xl font-bold mb-4 absolute -top-8 left-0 bg-base-300 py-2 px-6 rounded-lg">
          Today
        </h2>
        <h2 className="card-title text-4xl font-bold mb-4 absolute -bottom-10 right-0 bg-base-300 py-2 px-6 rounded-lg">
          {city}
        </h2>
        <div className="text-7xl font-normal mb-6 text-gradient flex flex-col-reverse sm:flex-row items-center justify-center gap-8">
          <div>{((today.maxTemp + today.minTemp) / 2).toFixed(0)}°C </div>
          <img
            src={`https://developer.foreca.com/static/images/symbols/${today.symbol}.png`}
            style={{ maxWidth: "6rem" }}
          ></img>
        </div>
        <div className="text-5xl font-bold mb-4 text-center">
          {today.symbolPhrase.slice(0, 1).toUpperCase() +
            today.symbolPhrase.slice(1)}
        </div>
        <div className="text-3xl font-normal tracking-wide text-center">
          {today.date}
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-4 px-12 text-lg sm:text-xl p-4">
        <p>
          Real feel:{" "}
          <span className="font-bold">
            {((today.maxFeelsLikeTemp + today.minFeelsLikeTemp) / 2).toFixed(0)}
            °C
          </span>
        </p>
        <p>
          Wind: <span className="font-bold">{today.maxWindSpeed} km/h</span>
        </p>
        <p>
          Clouds: <span className="font-bold">{today.cloudiness}%</span>
        </p>
        <p>
          Min Temp: <span className="font-bold">{today.minTemp}°C</span>
        </p>
        <p>
          Max Temp: <span className="font-bold">{today.maxTemp}°C</span>
        </p>
      </div>
    </div>
  );
};

export default CurrentCard;

import ForecastItem from "./ForecastItem";
import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";

const ForecastGrid = function () {
  const { forecast } = useContext(WeatherContext);
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate().toString().padStart(2, 0);
  const formattedDate = `${year}-${month}-${day}`;

  const forecastFilter = forecast.filter(
    (item, i) => item.date !== formattedDate && i < 7
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 w-10/12 mx-auto rounded-lg gap-4 mb-12">
      {forecastFilter.map((_, i) => (
        <ForecastItem key={i} data={forecastFilter[i]} />
      ))}
    </div>
  );
};

export default ForecastGrid;

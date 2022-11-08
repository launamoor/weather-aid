const ForecastItem = function ({ data }) {
  return (
    <div className="rounded-lg bg-base-200 shadow-xl p-4">
      <div className="font-semibold text-xl mb-4">{data.date}</div>
      <div className="flex items-center justify-center mb-2">
        <img
          src={`https://developer.foreca.com/static/images/symbols/${data.symbol}.png`}
          alt="Weather status icon"
          style={{ maxWidth: "8rem" }}
        ></img>
      </div>
      <div className="flex flex-col items-center sm:items-start justify-center gap-2 text-lg">
        <div>
          <span className="font-bold text-gradient text-2xl">
            {((data.maxTemp + data.minTemp) / 2).toFixed(0)}°C
          </span>
        </div>
        <div className="text-xl font-extrabold">
          {data.symbolPhrase.slice(0, 1).toUpperCase() +
            data.symbolPhrase.slice(1)}
        </div>
        <div>
          Precipitation: <span className="font-bold">{data.precipProb}%</span>
        </div>
        <div>
          Min: <span className="font-bold">{data.minTemp}°C</span>
        </div>
        <div>
          Max: <span className="font-bold">{data.maxTemp}°C</span>
        </div>
        <div>
          Sunrise: <span className="font-bold">{data.sunrise.slice(0, 5)}</span>
        </div>
        <div>
          Sunset: <span className="font-bold">{data.sunset.slice(0, 5)}</span>
        </div>
      </div>
    </div>
  );
};

export default ForecastItem;

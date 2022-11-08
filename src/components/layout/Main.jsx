import CurrentCard from "../CurrentCard";
import ForecastGrid from "../ForecastGrid";
import { useContext } from "react";
import WeatherContext from "../../context/WeatherContext";
import Loading from "../UI/Loading";

const Main = function () {
  const { loading } = useContext(WeatherContext);

  return (
    <main className="container mx-auto">
      {loading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <CurrentCard />
          <ForecastGrid />
        </>
      )}
    </main>
  );
};

export default Main;

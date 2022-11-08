import logo from "../../assets/weather-aid.png";
import { useState } from "react";
import { BiErrorAlt } from "react-icons/bi";

const Loading = function () {
  const [isTimeout, setIsTimeout] = useState(false);

  setTimeout(() => {
    setIsTimeout(true);
  }, 5000);

  return (
    <div
      style={{ height: "65vh" }}
      className={`flex flex-col items-center justify-center gap-2 ${
        !isTimeout ? "animate-bounce" : ""
      }`}
    >
      {!isTimeout ? (
        <>
          <img style={{ maxWidth: "12rem" }} src={logo} alt="Loading" />
          {/* <h2 className="text-3xl font-bold">Loading...</h2> */}
        </>
      ) : (
        <div className="flex flex-col items-center gap-4 pb-48">
          <BiErrorAlt
            style={{ height: "6rem", width: "6rem" }}
            className="text-error"
          />
          <h2 className="text-4xl font-bold text-error text-center leading-normal">
            Something went wrong, please try again!
          </h2>
        </div>
      )}
    </div>
  );
};

export default Loading;

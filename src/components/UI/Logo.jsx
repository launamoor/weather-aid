import logo from "../../assets/weather-aid.png";

const Logo = function () {
  return (
    <div className="flex flex-col items-center">
      <div className="w-32">
        <img src={logo} alt="Weather Aid Logo" className="w-full block" />
      </div>
      <h2 className="font-bold text-2xl tracking-tight">Weather Aid</h2>
    </div>
  );
};

export default Logo;

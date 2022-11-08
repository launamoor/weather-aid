import Logo from "../UI/Logo";
import SearchBar from "../SearchBar";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = function () {
  const [theme, setTheme] = useState("winter");

  const handleChangeTheme = () => {
    if (theme === "winter") {
      document.querySelector("html").dataset.theme = "halloween";
      setTheme("halloween");
    }
    if (theme === "halloween") {
      document.querySelector("html").dataset.theme = "winter";
      setTheme("winter");
    }
  };

  return (
    <header className="my-6 flex flex-col lg:flex-row gap-4 lg:gap-0 items-center justify-around mb-24">
      <div className="form-control absolute top-4 left-4 p-2">
        <label className="label flex-col cursor-pointer">
          <input
            onChange={handleChangeTheme}
            type="checkbox"
            className="toggle toggle-md md:toggle-lg"
          />
          <span className="label-text font-bold">
            {theme === "winter" ? "Light" : "Dark"}
          </span>
        </label>
      </div>
      <Logo />
      <SearchBar />

      <div className="absolute top-2 right-2 flex items-center justify-center flex-col md:flex-row text-lg">
        <Link to="/about" className="btn btn-sm md:btn-lg btn-ghost">
          About
        </Link>
        <Link to="/" className="btn btn-sm md:btn-lg btn-ghost">
          Home
        </Link>
      </div>
    </header>
  );
};

export default Header;

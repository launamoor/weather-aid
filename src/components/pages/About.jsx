import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = function () {
  return (
    <div
      style={{ height: "65vh" }}
      className="flex flex-col justify-center items-center lg:items-start px-12 lg:px-36 pb-36 text-center lg:text-start"
    >
      <h1 className="text-3xl lg:text-6xl font-bold mb-8 text-primary">
        Weather Aid
      </h1>
      <p className="mb-4 text-xl lg:text-2xl font-normal">
        An React application designed to provide you with the weather forecast.{" "}
        <br />
        This project is part of the{" "}
        <strong>
          <a
            target="_blank"
            rel="noreferrer"
            className="text-gradient"
            href="https://port1424.netlify.app"
          >
            {" "}
            Bartosz Jozefowicz
          </a>
        </strong>{" "}
        personal portfolio.
      </p>
      <p className="text-md lg:text-xl">
        Version <span className="font-bold">1.0.0</span>
      </p>
      <p className="text-md lg:text-xl mb-8">
        Layout By:
        <a
          target="_blank"
          rel="noreferrer"
          className="font-bold"
          href="https://port1424.netlify.app"
        >
           Bartosz Jozefowicz
        </a>
      </p>
      <Link to="/" className="btn btn-primary btn-lg">
        <FaHome className="mr-2" />
        Back to Home
      </Link>
    </div>
  );
};

export default About;

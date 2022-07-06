import { useEffect, useState } from "react";
import "../assets/css/hero.css";
import video from "../assets/videos/clouds.mp4";
import CombinedLineChart from "./CombinedLineChart";

const getDate = () => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${hours}:${minutes}:${seconds}`;
};

const evaluateWeatherCode = (code) => {
  let status = "";
  if (code === 0) {
    status = "Clear Sky";
  } else if (code >= 1 && code <= 3) {
    status = "Mainly clear, partly cloudy, and overcast";
  } else if (code >= 45 && code <= 48) {
    status = "Fog and depositing rime fog";
  } else if (code >= 51 && code <= 55) {
    status = "Drizzle: Light, moderate, and dense intensity";
  } else if (code >= 56 && code <= 57) {
    status = "Freezing Drizzle: Light and dense intensity";
  } else if (code >= 61 && code <= 65) {
    status = "Rain: Slight, moderate and heavy intensity";
  } else if (code >= 66 && code <= 67) {
    status = "Freezing Rain: Light and heavy intensity";
  } else if (code >= 71 && code <= 75) {
    status = "Snow fall: Slight, moderate, and heavy intensity";
  } else if (code === 77) {
    status = "	Snow grains";
  } else if (code >= 80 && code <= 82) {
    status = "Rain showers: Slight, moderate, and violent";
  } else if (code >= 85 && code <= 86) {
    status = "Snow showers slight and heavy";
  } else if ((code = 95)) {
    status = "	Thunderstorm: Slight or moderate";
  } else if (code >= 96 && code <= 99) {
    status = "Thunderstorm with slight and heavy hail";
  }
  return status;
};

const Hero = ({
  temperature,
  wind,
  humidity,
  clouds,
  title,
  currentWeather,
}) => {
  const [date, setdate] = useState("");

  useEffect(() => {
    setInterval(() => {
      setdate(getDate());
    }, 1000);
  }, [date]);

  return (
    <div className="hero-container">
      <div className="video-wrapper">
        <video playsInline autoPlay muted loop poster="">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="temp-widget flex flex-row">
        <div className="summary flex">
          <div className="first flex flex-row">
            <div className="location">
              <h3>
                {" "}
                <i className="fa-solid fa-location-dot"></i> Nairobi
              </h3>
            </div>
            <div className="date">
              <h3>
                <i className="fa-solid fa-clock"></i> {date}
              </h3>
            </div>
          </div>
          <div className="middle flex">
            <div className="average-temp ">
              <div className="temp flex">
                <var className="xl-font">
                  {currentWeather.temperature} <sup>0</sup>
                </var>
                <small className="comment">
                  {evaluateWeatherCode(currentWeather.weathercode)}
                </small>
              </div>
            </div>
          </div>
          <div className="bottom flex flex-row">
            <div className="wind">
              <i className="fa-solid fa-wind"></i>{" "}
              <span>{currentWeather.windspeed} </span>km/h
            </div>
            <div className="humidity">
              <i className="fa-solid fa-droplet"></i> 40
            </div>
            <div className="clouds">
              <i className="fa-solid fa-cloud"></i> 10%
            </div>
          </div>
        </div>
        <div
          className="combined-chart widget-container hero-chart-container"
          id="hero"
        >
          <CombinedLineChart
            temperature={temperature}
            wind={wind}
            humidity={humidity}
            clouds={clouds}
            title={title}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

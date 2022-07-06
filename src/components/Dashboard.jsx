import { useEffect, useState } from "react";
import "../assets/css/dashboard.css";
import Hero from "./Hero";
import Widget from "./Widget";

const Dashboard = ({ data, initializeDashBoard, location }) => {
  const [weatherData, setweatherData] = useState([]);
  useEffect(() => {
    if (data.length > 0) {
      setweatherData(data);
    } else {
      async function fetchData() {
        const response = await initializeDashBoard(location).then(
          (data) => data
        );
        setweatherData(response);
      }
      fetchData();
    }
  }, [data, initializeDashBoard, location]);

  if (weatherData.length > 0) {
    const [temperature, wind, humidity, cloud] = [
      weatherData[0].hourly,
      weatherData[1].hourly,
      weatherData[2].hourly,
      weatherData[3].hourly,
    ];
    return (
      <div className="forecast-container">
        <div className="top temperature">
          <div className="hero">
            <Hero
              temperature={temperature}
              wind={wind}
              humidity={humidity}
              clouds={cloud}
              currentWeather={weatherData[0].current_weather}
              title="Combined Chart"
              id="hero"
            />
          </div>

          <div className="inner-widgets">
            <div className="wind-speed widget-container">
              <Widget data={wind} title="Wind Speed" />
            </div>
            <div className="relative-humidity widget-container">
              <Widget data={humidity} title="Relative Humidity" />
            </div>
            <div className="cloud-cover widget-container">
              <Widget data={cloud} title="Cloud Cover" />
            </div>
            <div className="temperature widget-container">
              <Widget data={temperature} title="Temperature" />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Dashboard;

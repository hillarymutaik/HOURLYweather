const getTime = (time) => {
  let date = new Date(time);

  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
    return `${hours}:${minutes}`;
  }

  return `${hours}:${minutes}`;
};

const filterTime = (data) => {
  let hours = +data.time.split(":")[0];
  return hours >= 6 && hours <= 18;
};

const createCombinedChartData = (temperature, wind, humidity, clouds) => {
  let chartData = [];

  temperature.time.map((time, i) =>
    chartData.push({
      time: getTime(time),
      temperature: temperature.temperature_2m[i],
      wind: wind.windspeed_120m[i],
      humidity: humidity.relativehumidity_2m[i],
      clouds: clouds.cloudcover_mid[i],
    })
  );

  chartData = chartData
    .filter(filterTime)
    .sort((a, b) => +a.time.split(":")[0] - +b.time.split(":")[0]);

  return chartData;
};

export default createCombinedChartData;

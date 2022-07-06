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

const createChartData = ({ time, ...params }, title) => {
  let chartData = [];
  if (title === "Wind Speed") {
    params.windspeed_120m.map((param, i) =>
      chartData.push({ "Wind Speed": param, time: getTime(time[i]) })
    );
  } else if (title === "Relative Humidity") {
    params.relativehumidity_2m.map((param, i) =>
      chartData.push({ "Relative Humidity": param, time: getTime(time[i]) })
    );
  } else if (title === "Cloud Cover") {
    params.cloudcover_mid.map((param, i) =>
      chartData.push({ "Cloud Cover": param, time: getTime(time[i]) })
    );
  } else if (title === "Temperature") {
    params.temperature_2m.map((param, i) =>
      chartData.push({ Temperature: param, time: getTime(time[i]) })
    );
  }
  chartData = chartData
    .filter(filterTime)
    .sort((a, b) => +a.time.split(":")[0] - +b.time.split(":")[0]);

  return chartData;
};

export default createChartData;

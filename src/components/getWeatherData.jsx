import axios from "axios";
const getWeatherData = async ([latitude, longitude], params) => {
  let promises = params.map(async (param) => {
    try {
      let url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=${param}&current_weather=true&timezone=UTC`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  });
  return await Promise.all(promises);
};

export default getWeatherData;

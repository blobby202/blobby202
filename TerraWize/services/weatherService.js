import axios from 'axios';

const API_KEY = 'YOUR_OPENWEATHER_KEY'; // replace with secure storage

export default async function fetchWeather(lat = 0, lon = 0) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Weather fetch error', error);
    return null;
  }
}

import axios from 'axios';

const API_KEY = '4893c7a79ae4551e875e06108904b359';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?units=metric&appid=${API_KEY}&`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export default function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city}`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}

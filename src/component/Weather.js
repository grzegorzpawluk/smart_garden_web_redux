import axios from 'axios';
import React, { useState } from 'react';
import WeatherStyles from './Weather.module.css';

function Weather() {
  const [weatherInfo, setWeatherInfo] = useState({
    Temperatura: 0,
    Wilgotnosc: 0,
    Opady: 0,
    Jasnosc: 0,
  });

  const fetchWeather = async () => {
    const loginToken = localStorage.getItem('loginToken');

    if (loginToken) {
      axios.defaults.headers['Authorization'] = 'Bearer ' + loginToken;

      const { data } = await axios.get(
        'https://smartgarden.ddns.net/php-login-registration-api/weather-info.php'
      );

      setWeatherInfo(data);
    }

    console.log(weatherInfo);
  };

  return (
    <div className={WeatherStyles['weather-container']}>
      <br />
      <h1>Weather</h1>

      <button
        className={WeatherStyles['weather-button']}
        onClick={fetchWeather}
      >
        Pobierz pogodę
      </button>
      <ul className={WeatherStyles['weather-info']}>
        <li>Temperatura: {weatherInfo.Temperatura}</li>
        <li>Wilgotnosc: {weatherInfo.Wilgotnosc}</li>
        <li>Opady: {weatherInfo.Opady}</li>
        <li>Jasnosc: {weatherInfo.Jasnosc}</li>
      </ul>
    </div>
  );
}

export default Weather;

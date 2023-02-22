import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './styles.module.scss';
import Card from '../../components/card';

const HomeContainer = () => {
  const API_ENDPOINT = `http://api.openweathermap.org/data/2.5/forecast?q=Cape%20Town&appid=${process.env.REACT_APP_API_KEY}&units=metric`;
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const response = await axios.get(API_ENDPOINT);
      setWeatherData(response.data.list);
    };

    fetchWeatherData();
  }, [API_ENDPOINT]);
  return (
    <div className={styles.container}>
      <h1>5 Day weather forecast for Cape Town, South Africa</h1>
      <div className={styles.CardContainer}>
        {weatherData ? (
          weatherData.map((item, index) => <Card key={index} data={item} />)
        ) : (
          <p>Loading......</p>
        )}
      </div>
    </div>
  );
};

export default HomeContainer;

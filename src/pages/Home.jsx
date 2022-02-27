import { useState, useEffect } from 'react';
import { getData } from '../utils/getData';

import Header from '../components/Header';
import CurrentWeather from '../components/CurrentWeather';

import '../styles/Home.css';

const Home = () => {
  const [weather, setWeather] = useState({
    location: {},
    current: {},
    dailyForecast: [],
  });

  const loadData = async ({ latitude, longitude }) => {
    const data = await getData({ lat: latitude, lon: longitude });
    const { timezone, lat, lon, current, daily } = data;

    setWeather({
      location: { name: timezone, lat, lon },
      current,
      dailyForecast: daily.filter((item, index) => {
        if (index >= 1 && index <= 5) return item;
      }),
    });
  };

  useEffect(() => {
    loadData({ latitude: 37.7749, longitude: -122.4194 });
  }, []);
  return (
    <main className="hero">
      <Header updateState={loadData} />
      <CurrentWeather
        currentWeather={weather.current}
        location={weather.location}
      />
    </main>
  );
};

export default Home;

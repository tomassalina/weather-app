import { useState, useEffect } from 'react';
import { getWeather, defaultLocations } from '../utils/getData';

import Header from '../components/Header';
import CurrentWeather from '../components/CurrentWeather';
import AsideMenu from '../components/AsideMenu';
import Forecast from '../components/Forecast';
import Hightlights from '../components/Hightlights';
import Footer from '../components/Footer';

import '../styles/Home.css';

const Home = () => {
  const [weather, setWeather] = useState({
    current: { name: '', main: {}, weather: [], sys: {}, wind: {} },
    forecast: [],
  });

  const loadData = async ({ latitude, longitude }) => {
    const [currentWeather, dailyForecast] = await getWeather({
      latitude,
      longitude,
    });

    setWeather({
      current: currentWeather,
      forecast: dailyForecast.daily.filter((item, index) => {
        if (index >= 1 && index <= 5) return item;
      }),
    });
  };

  useEffect(() => {
    loadData(defaultLocations[0]);
  }, []);

  return (
    <>
      <main className="hero">
        <Header updateWeather={loadData} />
        <CurrentWeather currentWeather={weather.current} />
        <AsideMenu updateWeather={loadData} />
      </main>
      <Forecast forecast={weather.forecast} />
      <Hightlights currentWeather={weather.current} />
      <Footer />
    </>
  );
};

export default Home;

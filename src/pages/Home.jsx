import { useState, useEffect } from 'react';
import { getData } from '../utils/getData';

import Header from '../components/Header';
import CurrentWeather from '../components/CurrentWeather';
import AsideMenu from '../components/AsideMenu';
import Forecast from '../components/Forecast';
import Hightlights from '../components/Hightlights';
import Footer from '../components/Footer';

import '../styles/Home.css';

const Home = () => {
  const [weather, setWeather] = useState({
    current: {},
    forecast: [],
    isLoading: false,
    errorMessage: '',
  });

  const loadWeather = async location => {
    setWeather({ ...weather, isLoading: true });

    try {
      const currentWeather = await getData({
        ...location,
        collection: 'weather',
      });

      const dailyForecast = await getData({
        latitude: currentWeather.coord?.lat,
        longitude: currentWeather.coord?.lon,
        collection: 'onecall',
      });

      setWeather({
        current: currentWeather,
        forecast: dailyForecast.daily.filter((item, index) => {
          if (index >= 1 && index <= 5) return item;
        }),
        isLoading: false,
        errorMessage: '',
      });
    } catch (err) {
      console.error(err);
      setWeather({
        ...weather,
        isLoading: false,
        errorMessage: err,
      });
    }
  };

  useEffect(() => {
    loadWeather({ locationName: 'San Francisco' });
  }, []);

  return (
    <>
      <main className="hero">
        <Header updateWeather={loadWeather} />
        <CurrentWeather
          currentWeather={weather.current}
          isLoading={weather.isLoading}
        />
        <AsideMenu
          updateWeather={loadWeather}
          errorMessage={weather.errorMessage}
        />
      </main>
      <Forecast forecast={weather.forecast} />
      <Hightlights currentWeather={weather.current} />
      <Footer />
    </>
  );
};

export default Home;

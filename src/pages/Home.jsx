import { useState, useEffect } from 'react';
import { getData } from '../utils/getData';

import Header from '../components/Header';
import CurrentWeather from '../components/CurrentWeather';
import AsideMenu from '../components/AsideMenu';

import '../styles/Home.css';

const Home = () => {
  const [weather, setWeather] = useState({
    location: {},
    current: {},
    dailyForecast: [],
  });

  const defaultLocations = [
    {
      locationName: 'Los Angeles',
      latitude: 34.0536909,
      longitude: -118.242766,
    },
    {
      locationName: 'Buenos Aires',
      latitude: -34.6075682,
      longitude: -58.4370894,
    },
    {
      locationName: 'London',
      latitude: 51.5073219,
      longitude: -0.1276474,
    },
    {
      locationName: 'Barcelona',
      latitude: 41.3828939,
      longitude: 2.1774322,
    },
  ];

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
      <AsideMenu updateState={loadData} defaultLocations={defaultLocations} />
    </main>
  );
};

export default Home;

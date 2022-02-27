import { useState, useEffect } from 'react';
import '../styles/Home.css';
import Header from '../components/Header';
import CurrentWeather from '../components/CurrentWeather';

const Home = () => {
  const getData = async () => {
    const response = await fetch(
      'https://www.metaweather.com/api/location/2487956/'
    );
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <main className="hero">
      <Header />
      <CurrentWeather />
    </main>
  );
};

export default Home;

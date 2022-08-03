import { useState, useEffect } from 'react';
import { getData } from '../utils/getData';

const useWeather = () => {
  const [weather, setWeather] = useState({
    current: {},
    forecast: [],
    isLoading: false,
    errorMessage: '',
    units: 'metric',
  });

  const loadWeather = async location => {
    setWeather(prevWeather => ({ ...prevWeather, isLoading: true }));

    try {
      const currentWeather = await getData({
        ...location,
        collection: 'weather',
        units: weather.units,
      });

      const dailyForecast = await getData({
        latitude: currentWeather.coord?.lat,
        longitude: currentWeather.coord?.lon,
        collection: 'onecall',
        units: weather.units,
      });

      setWeather(prevWeather => ({
        current: currentWeather,
        forecast: dailyForecast.daily.filter((item, index) => {
          if (index >= 1 && index <= 5) return item;
        }),
        isLoading: false,
        errorMessage: '',
        units: prevWeather.units,
      }));
    } catch (err) {
      console.error(err);
      setWeather(prevWeather => ({
        ...prevWeather,
        isLoading: false,
        errorMessage: err,
      }));
    }
  };

  useEffect(() => {
    loadWeather({ locationName: 'San Francisco' });
  }, []);

  return { weather, loadWeather };
};

export default useWeather;

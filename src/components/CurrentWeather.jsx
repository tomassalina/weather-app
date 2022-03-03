import { format } from 'date-fns';
import getWeatherIcon from '../utils/getWeatherIcon';
import { BiLoaderAlt as Loader } from 'react-icons/bi';
import { IoLocationSharp as LocationSharpIcon } from 'react-icons/io5';

import '../styles/CurrentWeather.css';

const CurrentWeather = ({ currentWeather, isLoading }) => {
  const { name, weather, main } = currentWeather;

  const temp = Math.round(main?.temp) || 0;
  const description = weather?.length > 0 && weather[0].main;
  const today = format(new Date(), 'iii, d LLL');
  const image = weather?.length > 0 ? getWeatherIcon(weather[0].icon) : '';

  return (
    <section className="CurrentWeather">
      <figure
        className="CurrentWeather-image"
        style={{ backgroundImage: `url(${isLoading ? '' : image})` }}
      >
        {isLoading && <Loader className="Loader" />}
      </figure>
      <div className="CurrentWeather-content">
        <h1 className="CurrentWeather-temp">
          {temp}
          <span>°C</span>
        </h1>
        <h2 className="CurrentWeather-state">
          {isLoading ? 'Loading...' : description}
        </h2>
        <p className="CurrentWeather-date">
          Today <span>•</span> {today}
        </p>
        <p className="CurrentWeather-location">
          <LocationSharpIcon />
          {name}
        </p>
      </div>
    </section>
  );
};

export default CurrentWeather;

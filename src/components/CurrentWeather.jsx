import { format } from 'date-fns';
import getWeatherIcon from '../utils/getWeatherIcon';
import { BiLoaderAlt as Loader } from 'react-icons/bi';
import { IoLocationSharp as LocationSharpIcon } from 'react-icons/io5';

import '../styles/CurrentWeather.css';

const CurrentWeather = ({ currentWeather, location }) => {
  const image = currentWeather.weather
    ? getWeatherIcon(currentWeather.weather[0].icon)
    : '';
  const temp = Math.round(currentWeather.temp) || 0;
  const description = currentWeather.weather
    ? currentWeather.weather[0].description
    : 'Loading...';
  const today = format(new Date(), 'iii, d LLL');
  const locationName = location.name
    ? location.name.split('/').pop().replace('_', ' ')
    : 'undefined';

  return (
    <section className="CurrentWeather">
      <figure
        className="CurrentWeather-image"
        style={{ backgroundImage: `url(${image})` }}
      >
        {!image && <Loader className="Loader" />}
      </figure>
      <div className="CurrentWeather-content">
        <h1 className="CurrentWeather-temp">
          {temp}
          <span>°C</span>
        </h1>
        <h2 className="CurrentWeather-state">
          {description[0].toUpperCase() + description.slice(1)}
        </h2>
        <p className="CurrentWeather-date">
          Today <span>•</span> {today}
        </p>
        <p className="CurrentWeather-location">
          <LocationSharpIcon />
          {locationName}
        </p>
      </div>
    </section>
  );
};

export default CurrentWeather;

import '../styles/CurrentWeather.css';

import image from '../images/Shower.png';
import { IoLocationSharp } from 'react-icons/io5';

const CurrentWeather = () => {
  return (
    <section className="CurrentWeather">
      <figure className="CurrentWeather-image">
        <img src={image} alt="weather_state_name icon" />
      </figure>
      <div className="CurrentWeather-content">
        <h1 className="CurrentWeather-temp">
          15<span>°C</span>
        </h1>
        <h2 className="CurrentWeather-state">Shower</h2>
        <p className="CurrentWeather-date">
          Today <span>•</span> Fri, 5 Jun
        </p>
        <p className="CurrentWeather-location">
          <IoLocationSharp />
          Helsinki
        </p>
      </div>
    </section>
  );
};

export default CurrentWeather;

import { FaLocationArrow } from 'react-icons/fa';

import '../styles/Hightlights.css';

const Hightlights = ({ currentWeather }) => {
  const { wind, main, visibility } = currentWeather;

  const windSpeed = wind?.speed ? Math.round(wind?.speed) : 0;
  const humidity = main?.humidity ? main?.humidity : 0;
  const visibilityInMiles = visibility
    ? (visibility * 0.000621371).toFixed(1).replace('.', ',')
    : 0;
  const airPressure = main?.pressure ? main?.pressure : 0;

  return (
    <section className="Hightlights">
      <h2 className="Hightlights-title">Today's Hightlights</h2>
      <div className="Hightlights-container">
        <article className="Hightlights-item">
          <h3 className="Hightlights-type">Wind status</h3>
          <p className="Hightlights-value">
            {windSpeed}
            <span> mph</span>
          </p>
          <section className="Hightlights-windDirection">
            <div>
              <FaLocationArrow
                className="Hightlights-windDirection-icon"
                style={{ transform: `rotate(${wind?.deg - 45}deg)` }}
              />
            </div>
            <span>{wind?.deg} deg</span>
          </section>
        </article>
        <article className="Hightlights-item">
          <h3 className="Hightlights-type">Humidity</h3>
          <p className="Hightlights-value">
            {humidity}
            <span>%</span>
          </p>
          <section className="Hightlights-humidity">
            <div className="Hightlights-humidity-percentages">
              <span>0</span>
              <span>50</span>
              <span>100</span>
            </div>
            <div className="Hightlights-humidity-statusbar">
              <div
                className="Hightlights-humidity-internalbar"
                style={{ width: `${main?.humidity}%` }}
              ></div>
            </div>
            <p>%</p>
          </section>
        </article>
        <article className="Hightlights-item">
          <h3 className="Hightlights-type">Visibility</h3>
          <p className="Hightlights-value">
            {visibilityInMiles}
            <span> miles</span>
          </p>
        </article>
        <article className="Hightlights-item">
          <h3 className="Hightlights-type">Air pressure</h3>
          <p className="Hightlights-value">
            {airPressure}
            <span> mb</span>
          </p>
        </article>
      </div>
    </section>
  );
};

export default Hightlights;

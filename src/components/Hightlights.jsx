import { FaLocationArrow } from 'react-icons/fa';

import '../styles/Hightlights.css';

const Hightlights = ({ currentWeather }) => {
  const { wind, main, visibility } = currentWeather;

  const visibilityInMiles = (visibility * 0.000621371)
    .toFixed(1)
    .replace('.', ',');

  return (
    <section className="Hightlights">
      <h2 className="Hightlights-title">Today's Hightlights</h2>
      <article className="Hightlights-item">
        <h3 className="Hightlights-type">Wind status</h3>
        <p className="Hightlights-value">
          {Math.round(wind?.speed)}
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
          {main?.humidity}
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
          {main?.pressure}
          <span> mb</span>
        </p>
      </article>
    </section>
  );
};

export default Hightlights;

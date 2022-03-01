import ForecastCard from './ForecastCard';

import '../styles/Forecast.css';

const Forecast = ({ forecast }) => {
  return (
    <section className="Forecast">
      {forecast.map(weather => (
        <ForecastCard key={weather.dt} weatherDay={weather} />
      ))}
    </section>
  );
};

export default Forecast;

import ForecastCard from './ForecastCard';

import '../styles/Forecast.css';

const Forecast = ({ forecast, units }) => {
  return (
    <section className="Forecast">
      {forecast.map(weather => (
        <ForecastCard key={weather.dt} weatherDay={weather} units={units} />
      ))}
    </section>
  );
};

export default Forecast;

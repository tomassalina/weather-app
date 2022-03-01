import getWeatherIcon from '../utils/getWeatherIcon';
import { format, fromUnixTime } from 'date-fns';

const ForecastCard = ({ weatherDay }) => {
  const { temp, weather } = weatherDay;
  const image = weather.length > 0 ? getWeatherIcon(weather[0].icon) : '';

  const date = fromUnixTime(weatherDay.dt);
  const formattedDate = format(date, 'iii, d LLL');
  const isTomorrow = date.getDate() === new Date().getDate() + 1;

  return (
    <article className="Forecast-item">
      <h3 className="Forecast-item-date">
        {isTomorrow ? 'Tomorrow' : formattedDate}
      </h3>
      <figure
        className="Forecast-item-image"
        style={{ backgroundImage: `url(${image})` }}
      ></figure>
      <div className="Forecast-item-temp">
        <p className="">{Math.round(temp.max)}°C</p>
        <p>{Math.round(temp.min)}°C</p>
      </div>
    </article>
  );
};

export default ForecastCard;

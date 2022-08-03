import Header from '../components/Header';
import CurrentWeather from '../components/CurrentWeather';
import AsideMenu from '../components/AsideMenu';
import Forecast from '../components/Forecast';
import Hightlights from '../components/Hightlights';
import Footer from '../components/Footer';

import useWeather from '../hooks/useWeather';

import '../styles/Home.css';
import Units from '../components/Units';

const Home = () => {
  const { weather, loadWeather, units, setUnits } = useWeather();

  return (
    <div className="Home-wrapper">
      <main className="Home-hero">
        <Header updateWeather={loadWeather} />
        <CurrentWeather
          currentWeather={weather.current}
          units={units}
          isLoading={weather.isLoading}
        />
        <AsideMenu
          updateWeather={loadWeather}
          errorMessage={weather.errorMessage}
          isLoading={weather.isLoading}
        />
      </main>
      <div className="Home-info">
        <Units units={units} changeUnits={setUnits} />
        <Forecast forecast={weather.forecast} units={units} />
        <Hightlights currentWeather={weather.current} units={units} />
        <Footer />
      </div>
    </div>
  );
};

export default Home;

import Header from '../components/Header';
import CurrentWeather from '../components/CurrentWeather';
import AsideMenu from '../components/AsideMenu';
import Forecast from '../components/Forecast';
import Hightlights from '../components/Hightlights';
import Footer from '../components/Footer';

import useWeather from '../hooks/useWeather';

import '../styles/Home.css';

const Home = () => {
  const { weather, loadWeather } = useWeather();

  return (
    <div className="Home-wrapper">
      <main className="Home-hero">
        <Header updateWeather={loadWeather} />
        <CurrentWeather
          currentWeather={weather.current}
          isLoading={weather.isLoading}
        />
        <AsideMenu
          updateWeather={loadWeather}
          errorMessage={weather.errorMessage}
          isLoading={weather.isLoading}
        />
      </main>
      <div className="Home-info">
        <section className="Home-units">
          <button type="button" className="Home-units-celcius active">
            °C
          </button>
          <button type="button" className="Home-units-fahrenheit">
            °F
          </button>
        </section>
        <Forecast forecast={weather.forecast} />
        <Hightlights currentWeather={weather.current} />
        <Footer />
      </div>
    </div>
  );
};

export default Home;

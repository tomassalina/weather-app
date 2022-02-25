import '../styles/Home.css';
import Header from '../components/Header';
import CurrentWeather from '../components/CurrentWeather';

const Home = () => {
  return (
    <main className="hero">
      <Header />
      <CurrentWeather />
    </main>
  );
};

export default Home;

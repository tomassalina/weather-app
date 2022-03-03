import { BiCurrentLocation as LocationIcon } from 'react-icons/bi';

import '../styles/Header.css';

const Header = ({ updateWeather }) => {
  const handleLocation = () => {
    const onSuccess = position =>
      updateWeather({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    const onError = err => console.error('Geolocation error: ', err.message);

    'geolocation' in navigator
      ? navigator.geolocation.getCurrentPosition(onSuccess, onError)
      : alert('Gelocation API is not available');
  };

  const toggleSearch = e => {
    const menu = document.getElementById('menu');
    menu.classList.add('active');
  };

  return (
    <header className="Header">
      <button className="Header-search" type="button" onClick={toggleSearch}>
        Search for places
      </button>
      <button
        className="Header-location"
        type="button"
        onClick={handleLocation}
      >
        <LocationIcon />
      </button>
    </header>
  );
};

export default Header;

import { BiCurrentLocation as LocationIcon } from 'react-icons/bi';

import '../styles/Header.css';

const Header = ({ updateState }) => {
  const handleLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        position => updateState(position.coords),
        err => console.log('Geolocation error: ', err.message)
      );
    } else {
      alert('Gelocation API is not available');
    }
  };

  return (
    <header className="Header">
      <button className="Header-search" type="button">
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

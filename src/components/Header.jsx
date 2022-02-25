import '../styles/Header.css';
import { BiCurrentLocation } from 'react-icons/bi';

const Header = () => {
  return (
    <header className="Header">
      <button className="Header-search" type="button">
        Search for places
      </button>
      <button className="Header-location" type="button">
        <BiCurrentLocation />
      </button>
    </header>
  );
};

export default Header;

import { useState } from 'react';
import {
  AiOutlineSearch,
  AiOutlineClose,
  AiOutlineRight,
} from 'react-icons/ai';
import '../styles/AsideMenu.css';

const AsideMenu = ({ updateState, defaultLocations }) => {
  const [search, setSearch] = useState('');

  const handleSearch = async e => {
    e.preventDefault();
    const res = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=6a1ddb216b2f48966cd789b4bdc81cbf`
    );
    const data = await res.json();

    if (data.length > 0) {
      const { lat, lon } = data[0];
      updateState({ latitude: lat, longitude: lon });
      handleClose();
    }
  };

  const handleClose = () => {
    const menu = document.getElementById('menu');
    menu.classList.remove('active');
  };

  return (
    <aside className="AsideMenu" id="menu">
      <button className="AsideMenu-close" onClick={handleClose}>
        <AiOutlineClose />
      </button>
      <form className="AsideMenu-search" onSubmit={handleSearch}>
        <label htmlFor="search">
          <AiOutlineSearch className="AsideMenu-search-icon" />
          <input
            type="text"
            autoComplete="address-level1"
            name="search"
            value={search}
            placeholder="search location"
            onChange={e => setSearch(e.target.value)}
          />
        </label>
        <button type="submit">Search</button>
      </form>
      <div className="AsideMenu-options">
        {defaultLocations.map(loc => (
          <button
            key={loc.locationName}
            type="button"
            onClick={() => {
              updateState({ latitude: loc.latitude, longitude: loc.longitude });
              handleClose();
            }}
          >
            <p>{loc.locationName}</p>
            <AiOutlineRight className="AsideMenu-options-icon" />
          </button>
        ))}
      </div>
    </aside>
  );
};

export default AsideMenu;

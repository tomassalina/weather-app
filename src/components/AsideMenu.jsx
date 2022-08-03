import { useState, useEffect } from 'react';

import {
  AiOutlineSearch,
  AiOutlineClose,
  AiOutlineRight,
} from 'react-icons/ai';
import { MdErrorOutline } from 'react-icons/md';
import '../styles/AsideMenu.css';

const AsideMenu = ({ updateWeather, errorMessage }) => {
  const [search, setSearch] = useState('');
  const defaultLocations = [
    'San Francisco',
    'Buenos Aires',
    'London',
    'Barcelona',
  ];

  const handleSearch = async e => {
    e.preventDefault();
    await updateWeather({ locationName: search });
  };

  const handleClose = () => {
    const $menu = document.getElementById('menu');
    $menu.classList.remove('active');
  };

  useEffect(() => {
    if (!errorMessage) handleClose();
  }, [errorMessage]);

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
            id="search"
            value={search}
            placeholder="search location"
            onChange={e => setSearch(e.target.value)}
          />
        </label>
        <button type="submit">Search</button>
      </form>

      {errorMessage && (
        <div className="AsideMenu-error">
          <MdErrorOutline />
          <p>city not found</p>
        </div>
      )}

      <div className="AsideMenu-options">
        {defaultLocations.map(loc => (
          <button
            key={loc}
            type="button"
            onClick={() => {
              updateWeather({ locationName: loc });
              handleClose();
            }}
          >
            <p>{loc}</p>
            <AiOutlineRight className="AsideMenu-options-icon" />
          </button>
        ))}
      </div>
    </aside>
  );
};

export default AsideMenu;

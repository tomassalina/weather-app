const Units = ({ units, changeUnits }) => {
  return (
    <section className="Home-units">
      <button
        type="button"
        className={`Home-units-celcius ${units === 'metric' && 'active'}`}
        onClick={() => changeUnits('metric')}
      >
        °C
      </button>
      <button
        type="button"
        className={`Home-units-fahrenheit ${units === 'imperial' && 'active'}`}
        onClick={() => changeUnits('imperial')}
      >
        °F
      </button>
    </section>
  );
};

export default Units;

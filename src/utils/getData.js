const baseAPI = 'https://api.openweathermap.org/data/2.5/onecall';
const apiKEY = '6a1ddb216b2f48966cd789b4bdc81cbf';

export const getData = async (city = { lat, lon }) => {
  const { lat, lon } = city;

  const res = await fetch(
    `${baseAPI}?lat=${lat}&lon=${lon}&units=metric&exclude=hourly,minutely,alerts&appid=${apiKEY}`
  );
  const data = await res.json();
  return data;
};

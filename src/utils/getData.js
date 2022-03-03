export const getData = ({ collection, locationName, latitude, longitude }) =>
  new Promise(async (resolve, reject) => {
    let baseAPI;
    const API_KEY = '6a1ddb216b2f48966cd789b4bdc81cbf';
    const options = {
      units: 'metric',
      exclude: 'current,minutely,hourly,alerts',
    };

    if (locationName)
      baseAPI = `https://api.openweathermap.org/data/2.5/${collection}?q=${locationName}&appid=${API_KEY}&units=${options.units}&exclude=${options.exclude}`;
    else
      baseAPI = `https://api.openweathermap.org/data/2.5/${collection}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=${options.units}&exclude=${options.exclude}`;

    try {
      const res = await fetch(baseAPI);
      const data = await res.json();
      if (data.cod === '404') return reject(data.message);
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });

const getData = ({ collection, latitude, longitude }) =>
  new Promise(async (resolve, reject) => {
    const API_KEY = '6a1ddb216b2f48966cd789b4bdc81cbf';
    const baseAPI = `https://api.openweathermap.org/data/2.5/${collection}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&exclude=current,minutely,hourly,alerts`;

    try {
      const res = await fetch(baseAPI);
      const data = await res.json();
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });

export const getWeather = async ({ latitude, longitude }) => {
  const currentWeather = getData({
    collection: 'weather',
    latitude,
    longitude,
  });

  const dailyForecast = getData({
    collection: 'onecall',
    latitude,
    longitude,
  });

  return Promise.all([currentWeather, dailyForecast]);
};

export const defaultLocations = [
  {
    locationName: 'Los Angeles',
    latitude: 34.0536909,
    longitude: -118.242766,
  },
  {
    locationName: 'Buenos Aires',
    latitude: -34.6075682,
    longitude: -58.4370894,
  },
  {
    locationName: 'London',
    latitude: 51.5073219,
    longitude: -0.1276474,
  },
  {
    locationName: 'Madrid',
    latitude: 41.3828939,
    longitude: 2.1774322,
  },
];

import clearImage from '../images/Clear.png';
import lightCloudImage from '../images/LightCloud.png';
import heavyCloudImage from '../images/HeavyCloud.png';
import showerImage from '../images/Shower.png';
import heavyRainImage from '../images/HeavyRain.png';
import thunderstormImage from '../images/Thunderstorm.png';
import snowImage from '../images/Snow.png';

const getWeatherIcon = weatherConditionCode => {
  const codes = {
    '01d': clearImage,
    '01n': clearImage,
    '02d': lightCloudImage,
    '02n': lightCloudImage,
    '03d': heavyCloudImage,
    '03n': heavyCloudImage,
    '04d': heavyCloudImage,
    '04n': heavyCloudImage,
    '09d': showerImage,
    '10d': heavyRainImage,
    '11d': thunderstormImage,
    '13d': snowImage,
  };

  return codes[weatherConditionCode];
};

export default getWeatherIcon;

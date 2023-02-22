import {
  TiWeatherCloudy,
  TiWeatherSunny,
  TiWeatherNightClear,
  TiWeatherPartlySunny,
  TiWeatherRain,
  TiWeatherStormy,
  TiWeatherSnow,
  TiWeatherFog,
} from 'react-icons/ti';

export const getIcon = (iconCode) => {
  switch (iconCode) {
    case '01d':
      return <TiWeatherSunny />;
    case '01n':
      return <TiWeatherNightClear />;
    case '02d':
    case '02n':
      return <TiWeatherPartlySunny />;
    case '03d':
    case '03n':
    case '04d':
    case '04n':
      return <TiWeatherCloudy />;
    case '09d':
    case '09n':
    case '10d':
    case '10n':
      return <TiWeatherRain />;
    case '11d':
    case '11n':
      return <TiWeatherStormy />;
    case '13d':
    case '13n':
      return <TiWeatherSnow />;
    case '50d':
    case '50n':
      return <TiWeatherFog />;
    default:
      return <TiWeatherCloudy />;
  }
};

import styles from './styles.module.scss';
const Card = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.IconContainer}>
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
          alt={data.weather[0].icon}
        />
      </div>
      <h3>{new Date(data.dt_txt).toLocaleDateString()}</h3>
      <h3>{new Date(data.dt_txt).toLocaleTimeString()}</h3>
      <p>{Math.round(data.main.temp)}&deg;C</p>
      <p>
        High: {Math.round(data.main.temp_max)}&deg;C / Low:
        {Math.round(data.main.temp_min)}&deg;C
      </p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind Speed: {data.wind.speed} km/h</p>
      <p>{data.weather[0].description}</p>
    </div>
  );
};

export default Card;
